import React, { useEffect, useState, useRef } from "react";
import ChatBot from "./chatbot.png";
import User from "./User.png";
import axios from "axios";
import Bottom from "./onclick";
function CbChats(count) {
  const [value, setvalue] = useState([]);
  const getValApi = async () => {
    try {
      let endpoint = "https://62299094be12fc4538a1a26a.mockapi.io/inValueUser";
      var getData = await axios.get(endpoint);
      setvalue(getData.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    console.log("vakskj", count.number);
    getValApi();
  }, [count.number]);

  return (
    <div className="CbChats">
      <div className="defaultChats">
        <img src={ChatBot} alt="ChatbotImg" />
        <div className="CbMsgs">
          <div className="CbMsg">
            <p>Hii, I'm Jarvis</p>
          </div>
          <div className="CbMsg">
            <p>How can I help you....</p>
          </div>
        </div>
      </div>
      <div>
        {value.map((val, index) => (
          <div key={index + 1}>
            <div className="CbDynamic">
              <div className="InCbChat">
                <div className="CbUserMsg">
                  <p id="CbUserPara">{val.typed}</p>
                </div>
                <img src={User} alt="UserIcon"></img>
              </div>
            </div>
            <div className="defaultChats">
              <img src={ChatBot} alt="ChatbotImg" />
              <div className="CbMsgs">
                <div className="CbMsg">
                  <p>{val.botValue}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CbChats;
