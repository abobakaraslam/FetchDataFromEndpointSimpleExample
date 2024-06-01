import { useEffect, useState } from "react";

/* File: App.jsx */
function App() {
  const getDataFromApi = async () => {
    let myEndpoint = "http://localhost:5000/user/all-user";
    let myData = await fetch(myEndpoint); /* Must wait for fetching */
    let parsedData = await myData.json(); /* Must wait for myData.json */
    console.log("parsed received Data: ", parsedData);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div>
      <div className="m-4">
        <h1 className="text-center">Getting Data From Endpoints</h1>

        <h1 className="text-red-700 text-center">See data in Console window</h1>
      </div>
    </div>
  );
}

export default App;
