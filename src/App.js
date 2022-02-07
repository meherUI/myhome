import { useState, useEffect } from "react";
import "./App.scss";

import ListingCard from "./components/ListingCard";

function App() {
  let [listData, setListData] = useState([]);

  const deriveData = () => {
    var url = new URL(encodeURI(window.location.href));
    var params = new URLSearchParams(url.search);
    if (params.toString().includes("data")) {
      var data;
      for (let [key, value] of params) {
        if (key === "data") {
          data = value.replaceAll("%22", "");
          
          return data.split(',')
        }
      }
  }
}

  useEffect(() => {    
   const data =  deriveData();
   setListData(data);
  }, []);

  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      if (!inThrottle) {
        func.apply(args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const addBlock = () => {    
    if (listData && listData.length > 0) {
      const data = deriveData()
      window.location.href =  window.location.href+`,cd${data.length+1}`
    }else{
      window.location.href =  window.location.href+`?data=cd1`
    }
  };

  const throttleIt = throttle(addBlock, 5000)
  
  return (
    <div className="container">
      <div className="row border-in-sm">
        <button type="button" className="addBtn btn-primary" onClick={throttleIt}>
          Add Block

        </button>
      </div>
      <div className="row">
        {listData && listData.map((d, i) => {
          return <ListingCard key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
