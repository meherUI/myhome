import { useState, useEffect, useCallback } from "react";
import "./App.scss";
import {throttle} from 'lodash'

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

  const addBlock = () => {    
    const data = deriveData();
    if (data && data.length > 0) {
      window.location.href =  window.location.href+`,cd${data.length+1}`
    }else{
      window.location.href =  window.location.href+`?data=cd1`
    }
  };

  const throttleIt = useCallback(
    throttle(addBlock, 5000, { 'trailing': false }), []
  )
  
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
