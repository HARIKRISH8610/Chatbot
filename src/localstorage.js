const setLocalstorage = (val) => {
  var initialGet = localStorage.getItem("message");
  if (initialGet == null) {
    localStorage.setItem("message", val);
  } else {
    var storeArr = [];
    var getLocalValAll = localStorage.getItem("message");
    var splitVal = getLocalValAll.split(",");
    storeArr.push(splitVal, val);
    localStorage.setItem("message", storeArr);
  }
};
export default setLocalstorage;
