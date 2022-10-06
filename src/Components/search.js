import * as React from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.   
    let params = serializeFormQuery(event.target);
    setSearchParams(params);
  }

  return (
    <div>
      <button onClick={handleSubmit}>hu</button>
    </div>
  ); 
}  