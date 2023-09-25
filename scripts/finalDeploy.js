const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
    
    const form = await hre.ethers.getContractFactory("form");
    const contract = await form.deploy();
  
    await contract.waitForDeployment();
    console.log("Address of contract:",contract.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });