const hre = require("hardhat");
const { ethers } = require("hardhat");


async function getBalances(address){
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatEther(balanceBigInt);
}

async function consoleBalances(addresses){
  let counter=0;
  for(const address of addresses){
    console.log(`Address ${counter} balance:`, await getBalances(address));
    counter++;
    
  }
}

async function consoleMemos(memos){
  for(const memo of memos){
    const timestamp = memo.timestamp;
    const contact = memo.contact;
    const from = memo.from;
    const residence = memo.residence;
    const aadhar = memo.aadhar;
    console.log(
      `At ${timestamp}, contact: ${contact}, residence: ${residence}, aadhar: ${aadhar},address ${from}`
      );
  }
}

async function main() {
  const [owner, from1, from2, from3]=await hre.ethers.getSigners();
  const form = await hre.ethers.getContractFactory("form");
  const contract = await form.deploy();

  await contract.waitForDeployment();
  console.log("Address of contract:",contract.getAddress());

  const addresses=[owner.address,from1.address,from2.address,from3.address];
  console.log("before buying chai");
  await consoleBalances(addresses);

  const amount = {value:hre.ethers.parseEther("1")}
  await contract.connect(from1).submitForm("from1","Very nice chai","1234567",amount);
  await contract.connect(from2).submitForm("from2","Very nice gud","1234567",amount);
  await contract.connect(from3).submitForm("from3","Very nice info","1234567",amount);

  console.log("after buying chai");
  await consoleBalances(addresses);

  const memos= await contract.getMemos();
  consoleMemos(memos);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
