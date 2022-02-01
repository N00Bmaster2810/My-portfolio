import React, { useState, useEffect } from "react";
import { FormGroup, TextField, Button, Alert } from "@mui/material";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      number,
      message,
    };
    console.log(data);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");

      if (res.status === 200) {
        
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      }
      else {
        console.log(res);
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col  md:flex-col lg:flex-row md:p-8 rounded-md items-center" id="about">
        <div className="w-full md:w-4/4 flex flex-col justify-between items-center lg:w-2/4 p-2 md:p-6 ">
          <p className="text-5xl font-serif tracking-widest text-[#F52D04] my-5">Contact Me</p>
          <form className="flex flex-col w-full">
            <FormGroup>
              <TextField
                variant="outlined"
                color="warning"
                className="my-2"
                helperText="Please enter your name"
                id="name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                color="warning"
                className="my-2"
                helperText="Please enter your Email"
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                color="warning"
                className="my-2"
                helperText="Please enter the contact number"
                id="number"
                label="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <TextField
                variant="outlined"
                color="warning"
                className="my-2"
                helperText="Please enter your message"
                id="message"
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>
          </form>
          <Button className="bg-indigo-900" variant="contained" type="submit" endIcon={<AiOutlineSend /> } onClick={(e) => handleSubmit(e)}>
            Send
          </Button>
        </div>
        <div className="w-full  md:w-3/4 lg:w-2/4 md:mx-auto p-6 md:p-6 ">
          <div>
            <img alt="about-me picture" src="\contact.jpg" className="rounded-2xl filter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
