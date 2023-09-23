import React, { useState, useEffect } from 'react'
import Web3 from "web3";
const web3 = new Web3(window.ethereum);
var contract = null;
var account = null;
const ADDRESS = "0xAFC1fCDB7597dA5C042Cb463aCFD2749B975D710"
const ABI = [
    {
        "inputs": [],
        "name": "getAddhar",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAddress",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContact",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_contact",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_residence",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_addhar",
                "type": "string"
            }
        ],
        "name": "setData",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
]
const Contracts = () => {
    const [isConneted, setIsConnected] = useState(false)


    const ConnectWallet = async () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' });
            window.web3 = new Web3(window.ethereum);

            var accounts = await web3.eth.getAccounts();
            account = accounts[0];
            contract = new web3.eth.Contract(ABI, ADDRESS);
        }
        else {
            console.log('Create a metamask account first!')
            setTimeout(() => {
                console.log(null)
                window.open("https://metamask.io/download/", "_blank")
            }, 3000)
        }
    }

    const DataFetch = async () => {
        if (contract) {
            var addhar = await contract.methods.getAddhar().call();
            var contact = await contract.methods.getContact().call();
            var address = await contract.methods.getAddress().call();
            console.log(addhar, contact, address)
        }
    }

    return (
        <div className='metamask-cont'>
            <div className='meta-head' style={{ marginBottom: '45px' }}>
                <h2>Wallet Connection</h2>
                <button onClick={ConnectWallet}>
                    {account ? 'Connected!' : 'Connect wallet'}
                </button>
                <button onClick={DataFetch}>DataStorage</button>
            </div>
        </div>
    )
}
export default Contracts
