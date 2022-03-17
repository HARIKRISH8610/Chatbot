import React, { useRef, useEffect } from "react";
import ChatBot from "./chatbot.png";
import User from "./User.png";

function CbChats(props) {
  const el = useRef(null);

  const { chats } = props;

  useEffect(() => {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  return (
    <div className="CbChats animate__animated animate__fadeIn">
      <div>
        <div className="defaultChats animate__animated animate__fadeIn">
          <img src={ChatBot} alt="ChatbotImg" />
          <div className="CbMsgs">
            <div className="CbMsg">
              <p>Hii, I'm Jarvis</p>
            </div>
            <div className="CbMsg">
              <p>Please chat with me....</p>
            </div>
          </div>
        </div>
        <div ref={el}>
          {chats?.map((val, index) => (
            <div key={index + 1}>
              <div className="CbDynamic animate__animated animate__fadeIn">
                <div className="InCbChat">
                  <div className="CbUserMsg">
                    <p id="CbUserPara">{val}</p>
                  </div>
                  <img src={User} alt="UserIcon"></img>
                </div>
              </div>
              <div className="defaultChats animate__animated animate__fadeIn">
                <img src={ChatBot} alt="ChatbotImg" />
                <div className="CbMsgs">
                  <div className="CbMsg">
                    <p>{val}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CbChats;
