import React, { useState, useEffect } from 'react'
const ethers = require("ethers")

const MetaMask = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [userBalance, setUserBalance] = useState(null)

    const ConnectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChanged([result[0]])
                })
        }
        else {
            setErrorMessage('Create a metamask account first!')
            setTimeout(() => {
                setErrorMessage(null)
                window.open("https://metamask.io/download/", "_blank");
            }, 3000)
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName)
        getUserBalance(accountName)
    }

    const getUserBalance = (accountAddress) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
            .then(balance => {
                setUserBalance(ethers.formatEther(balance))
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
        <div className='metamask-cont'>
            <div className='meta-head'>
                <h1>Wallet Connection</h1>
                <button onClick={ConnectWallet}>Connect wallet</button>
            </div>
            <div className='meta-details'>
                <div className='meta-det-cont'>
                    <div className='meta-det-name'>Address</div>
                    <div className='meta-det-val'>{defaultAccount}</div>
                </div>
                <div className='meta-det-cont'>
                    <div className='meta-det-name'>Balance</div>
                    <div className='meta-det-val'>${userBalance}</div>
                </div>
                <form onSubmit={sendTransaction}>
                    <div className='meta-head'>
                        <h2 style={{ paddingTop: '5px' }}>Click the donate button to donate</h2>
                        <button type="submit">Donate</button>
                    </div>
                </form>
            </div>
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    )
}

export default MetaMask