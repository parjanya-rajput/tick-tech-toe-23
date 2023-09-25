import {useState,useEffect} from 'react';
const Memos = ({state}) =>{
    const [memos,setMemos]=useState([]);
    const {contract}=state;
    

    useEffect(()=>{
        const memosMessage=async()=>{
            
            const memos= await contract.getMemos();
            setMemos(memos);
        }
        contract && memosMessage();
    },[contract]);


return(
<>
<center><p>Your Forms</p></center>

{memos.map((memo)=>{return(
    <table key={memo.timestamp}>
        <tbody>
            
            <tr className='table'>
                <td>contract: {memo.contact} </td>
                <td>residence: {memo.residence} </td>
                <td>aadhar: {memo.aadhar} </td>
                <td>timestamp: {String(memo.timestamp)} </td>
                <td>user address: {memo.from} </td>
            </tr>
            
        </tbody>
    </table>
)})}
</>
);
};
export default Memos;