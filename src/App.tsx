import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/20/solid";
import "./App.css";
import Shell from "./components/Shell";
import Guardian from "./components/Guardian";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  return (
    <>
    <div
      className={`h-screen w-screen fixed bg-pink-300 flex items-center justify-center flex-col ${isStarted ? "-translate-y-full" : "translate-y-0"} transition-all duration-500 z-40`}
      onClick={() => setIsStarted(true)}
    >
      <HeartIcon className="w-24 text-pink-500 animate-ping mb-5" /> 
      <p
        className={`text-2xl text-white font-mclaren ${
          isStarted ? "scale-[200%] opacity-0" : "scale-100 opacity-100"
        } transition-all `}
      >
        Tap the screen!
      </p>
    </div>
    <Guardian setAuthorized={setIsAuthorized} authorize={isAuthorized} />
    {
      isStarted && <Shell authorize={isAuthorized} />
    }
    
    </>
  );
}

export default App;
