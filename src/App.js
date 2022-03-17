import "./App.css";
import ChatBotInner from "./ChatbotInner";
import Robot from "./Robot.png";
import bolt from "./Bolt.gif";
import { useEffect, useState } from "react";
function App() {
  const [load, setload] = useState(true);
  const fnSettime = () => {
    setTimeout(() => {
      setload(false);
    }, 2000);
  };
  useEffect(() => {
    fnSettime();
  }, []);

  return (
    <>
      {load && (
        <div className="preloader">
          <img src={bolt} alt="preloader" className="preGif" />
        </div>
      )}
      <div className="CbBackground">
        <div className="CbHeader">
          <div className="CbImgHead">
            <img src={Robot} className="BotIMg" alt="ChatbotImg" />
            <h3>Hii, Meet Jarvis</h3>
          </div>
        </div>
        <div className="CbDiv">
          <div className="CbArea">
            <ChatBotInner />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
