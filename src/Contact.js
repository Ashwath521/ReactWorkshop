import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";
// import Image from "react";

function Contact() {
  let [user, setUser] = useState([]);

  async function getData() {
    const res = await axios.get("https://api.github.com/users");
    setUser(res.data);
  }

  getData();

  // console.log(user);
  return (
    <>
      <div className="main">
        {user.map((Data) => {
          return (
            <>
              <div className="child" key={Data.id}>
                <h1>{Data.login}</h1>
                <img
                  src={Data.avatar_url}
                  alt="github images"
                  height="250px"
                  widht="200px"
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Contact;
