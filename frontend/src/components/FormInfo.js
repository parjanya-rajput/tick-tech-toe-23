import React from "react";
import { useState } from "react";
import "./forminfo.css";
import ConnectWalletButton from "../components/ConnectWallet";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormInfo() {
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();
  const [addharnumber, setAddharnumber] = useState();
  const [aidneeded, setAidneeded] = useState();
  const [total, setTotal] = useState();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8008/forminfo", {
        name,
        gender,
        contact,
        address,
        addharnumber,
        aidneeded,
        total,
      })
      .then((result) => {
        console.log(result);
        navigate("/login"); //go to login page
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="forminfomain">
      <form className="form" onSubmit={handleSubmit}>
        <div className="formcon">
          <label htmlFor="name">Name</label>
          <br />
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="your answer"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formcon">
          <label htmlFor="gender">Gender</label>
          <br />
          <input
            required
            type="radio"
            name="Gender"
            id="female"
            className="radio1"
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="inradio" htmlFor="female">
            Female
          </label>
          <input
            required
            type="radio"
            name="Gender"
            id="male"
            className="radio"
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="inradio" htmlFor="male">
            Male
          </label>
          <input
            required
            type="radio"
            name="Gender"
            id="other"
            className="radio"
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="inradio" htmlFor="other">
            Other
          </label>
        </div>
        <div className="formcon">
          <label htmlFor="contact">Contact</label>
          <br />
          <input
            required
            type="tel"
            name="contact"
            id="contact"
            placeholder="your answer"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="formcon">
          <label htmlFor="address">Address</label>
          <br />
          <input
            required
            type="text"
            name="address"
            id="address"
            placeholder="your answer"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="formcon">
          <label htmlFor="addharnumber">Addhar number</label>
          <br />
          <input
            required
            type="text"
            name="addharnumber"
            id="addharnumber"
            placeholder="your answer"
            onChange={(e) => setAddharnumber(e.target.value)}
          />
        </div>
        <div className="formcon">
          <label htmlFor="aidneeded">Aid needed</label>
          <br />
          <input
            required
            type="text"
            name="aidneeded"
            id="aidneeded"
            placeholder="your answer"
            onChange={(e) => setAidneeded(e.target.value)}
          />
        </div>
        <div className="formcon">
          <label htmlFor="total">Total Family Members</label>
          <br />
          <input
            required
            type="text"
            name="total"
            id="total"
            placeholder="your answer"
            onChange={(e) => setTotal(e.target.value)}
          />
        </div>
        <div className="buttons">
          <div className="btn">
            <button type="submit">SUBMIT</button>
          </div>
          <div className="btn reset">
            <input type="reset" value="Reset" />
          </div>
          <ConnectWalletButton />
        </div>
      </form>
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
