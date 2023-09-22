import React, { useState } from 'react';
const ethers = require("ethers")

const MetaMask = () => {

    const [errorMessage, setErrorMessage] = useState(null);

    const [defaultAccount, setDefaultAccount] = useState(null);

    const [userBalance, setUserBalance] = useState(null);

    const ConnectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChanged([result[0]]);
                })
        }
        else {
            setErrorMessage('Create a metamask account first!');
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
        getUserBalance(accountName)
    }

    const getUserBalance = (accountAddress) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
            .then(balance => {
                setUserBalance(ethers.formatEther(balance));
            })
    }

    async function sendTransaction(e) {
        let params = [{
            from: "0x017fd813b86e36519fce65e8a04dbfa03a5735c4",
            to: "0x2debb4b55b1687c15d61d2fa94696d8d3c00702f",
            gas: Number(21000).toString(16),
            gasPrice: Number(2500000).toString(16),
            value: Number(10000000000000000).toString(16),
        }]

        let result = await window.ethereum.request({
            method: "eth_sendTransaction", params
        }).catch((err) => {
            console.log(err)
        })

    }


    return (
        <div>
            <h1> wallet connection</h1>
            <button onClick={ConnectWallet}>Connect wallet</button>
            <h3>Address: {defaultAccount}</h3>
            <h3>Balance: ${userBalance}</h3>
            <form onSubmit={sendTransaction}>
                <h3>Click the donate button to donate</h3>

                <input type="submit" value="Donate" />

            </form>


            {errorMessage}


        </div>
    )


}

export default MetaMask;