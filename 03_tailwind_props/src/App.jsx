import { useState } from "react";
import "./App.css";
import Cards from './components/Cards';

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 h-[200px] w-[300px] rounded-md mb-4">
        Hey this is tail trial
      </h1>

      <Cards username="Ihsaan Kesarwani" />
      <Cards username="Chai aurcode" />

     
    </>
  );
}

export default App;
