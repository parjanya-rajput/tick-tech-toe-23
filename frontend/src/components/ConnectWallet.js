import React, { useState, useEffect } from 'react'
const ethers = require("ethers")

const ConnectWalletButton = () => {
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
            window.open("https://metamask.io/download/", "_blank")
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

    return (
        <button className='wallet-button' onClick={ConnectWallet}>
            {defaultAccount ? 'Connected!' : 'Connect wallet'}
        </button>
    )
}

export default ConnectWalletButton
