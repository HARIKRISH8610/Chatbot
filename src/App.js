import "./App.css";
import ChatBotInner from "./ChatbotInner";
function App() {
  return (
    <div className="CbBackground">
      <div className="CbHeader">
        <h3>Hii, Meet the Jarvis</h3>
      </div>
      <div className="CbDiv">
        <div className="CbArea">
          <ChatBotInner />
        </div>
      </div>
    </div>
  );
}

export default App;
