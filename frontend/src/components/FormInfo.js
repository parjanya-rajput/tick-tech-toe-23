import abi from "../contract/form.json";
import React from 'react'
import {useState,useEffect} from 'react';
import Buy from './Buy';
import Memos from './Memos';
import './forminfo.css'
import ConnectWallet from "../components/Contracts";
const ethers = require("ethers");

function FormInfo() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  });
  const [account,setAccount]=useState("None");

  useEffect(() =>{
    const connectWallet=async()=>{
      const contractAddress="0x497dff5a1d02687b5d5d8cffcf78f7b85f4c3ae4";
      const contractABI=abi.abi;
      try{
        const {ethereum}=window;
        if(ethereum){
          const account=await ethereum.request({method:"eth_requestAccounts",});
        
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress,contractABI,signer);
        setAccount(account);
        setState({provider,signer,contract})
      }else{
        alert("Please make an account on Metamask!");
      }
    }
    
      catch(error){
        console.log(error);
      }
    };
    connectWallet();
  },[]);
  // console.log(state);

  return (
    <div className="App">
      <p>Connected Account: {account}</p>
      <div className="container">
      <Buy state={state} />
      <Memos state={state} />
      </div>
      
    </div>
  );
}

export default FormInfo;



/*
Form Details
1. Name
2. Gender
3. Contact
4. Address
5. Addhar number
6. Aid needed
7. Number of family members*/