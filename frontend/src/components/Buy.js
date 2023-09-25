const ethers = require("ethers");
const Buy = ({state}) =>{
    const submitForm=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const contact= document.querySelector("#contact").value;
        const residence= document.querySelector("#residence").value;
        const aadhar= document.querySelector("#aadhar").value;
        console.log(contact,residence,aadhar,contract);
        const amount = {value: ethers.parseEther("0.01")};

        const transaction = await contract.submitForm(contact,residence,aadhar,amount);
        await transaction.wait();
        console.log("Transaction is done");



    };
    return (
    <>
    
    <div className='forminfomain'>
      <form className='form' onSubmit={submitForm}>
        <h2 style={{textAlign:'center', textColor: 'black'}}>Need Help?</h2>
          <input 
            type="text" 
            name="name" 
            id="name"
            placeholder='Your Name'
            
          />
          <div className="radio-container">
            <input type="radio" name="Gender" id="female" className='radio' placeholder='female' />
            <label className='inradio' htmlFor="female">Female</label>
          </div>
          <div className="radio-container">
            <input type="radio" name="Gender" id="male" className='radio'  />
            <label className='inradio' htmlFor="male">Male</label>
          </div>
          <div className="radio-container">
            <input type="radio" name="Gender" id="other" className='radio' />
            <label className='inradio' htmlFor="other">Other</label>
          </div>
          <input 
            type="tel" 
            name="contact" 
            id="contact" 
            placeholder='Contact'
            
          />
          <input 
            type="text" 
            name="address" 
            id="residence"
            placeholder='Address'
            
          />
          <input 
            type="text" 
            name="addharnumber" 
            id="aadhar" 
            placeholder='Aadhar Number'
            
          />
          <input 
            type="text" 
            name="aidneeded" 
            id="aidneeded" 
            placeholder='Aid Needed'
            
          />
          <input 
            type="text"
            name="total" 
            id="total" 
            placeholder='Total Family Members'
            
          />
          <div className='buttons'>
            <div className='meta-head'>
            <button type="submit">Submit form</button>
            </div>
            <div className='btn reset'>
              <input type="reset" value="Reset" />
            </div>
            
          </div>
      </form>
    </div>

    </>
    );

}
export default Buy;