import axios from "axios";
import CbChats from "./CbChats";

async function PostInApi(values) {
  let endpoint = "https://62299094be12fc4538a1a26a.mockapi.io/inValueUser";
  switch (values) {
    case "How are you":
      var payload1 = {
        botValue: "Im fine",
        typed: values,
      };
      return await axios.post(endpoint, payload1);
      break;
    case "javascript":
      var payload2 = {
        botValue: "You ask javascript",
        typed: values,
      };
      return await axios.post(endpoint, payload2);
      break;
    case "react":
      var payload = {
        botValue: "you ask react",
        typed: values,
      };
      return await axios.post(endpoint, payload);
      break;
    case "html":
      var payload3 = {
        botValue: "you ask html",
        typed: values,
      };
      return await axios.post(endpoint, payload3);
      break;
    default:
      var payload4 = {
        botValue: "Ask relavent questions",
        typed: values,
      };
      return await axios.post(endpoint, payload4);
      break;
  }
}
export default PostInApi;
