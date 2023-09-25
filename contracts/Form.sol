//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract form{
    struct Memo{
        string contact;
        string residence;
        string aadhar;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner;

    constructor(){
        owner=payable(msg.sender);
    }

    function submitForm(string memory contact,string memory residence, string memory aadhar) public payable{
        require(msg.value>0,"pay more");
        owner.transfer(msg.value);
        memos.push(Memo(contact,residence,aadhar,block.timestamp,msg.sender));
    }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }








}