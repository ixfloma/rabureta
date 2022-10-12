import React, { useEffect, useState } from "react";

interface GuardianProps {
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  authorize: boolean;
}

const Guardian: React.FC<GuardianProps> = ({ setAuthorized, authorize }) => {
  const [pass, setPass] = useState("");
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(false);
  },[pass])
  return (
    <div
      className={`fixed h-screen w-screen z-30 bg-transparent flex justify-center items-center flex-col ${authorize ? "backdrop-blur-none translate-y-full" : "backdrop-blur-md translate-y-0"} transition-all duration-[450ms]`}
    >
      <p className="font-patrick text-center text-white">Are you the right person to open this?</p>
      <p className="font-patrick mb-4 text-center text-white">
        Hint: it's the day our relationship started with format ddmmyy
      </p>
      <input
        type="password"
        placeholder="Input your answer"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        name=""
        id=""
        className="rounded px-3 py-4 w-[70vw] focus:outline-pink-300"
      />
      <div className={`${touch ? "opacity-100" : "opacity-0"} h-6 mt-2 font-patrick text-red-500 transition-all`}>Who are you?</div>
      <button
        className="flex w-1/2 items-center justify-center px-4 py-3 text-2xl bg-pink-500 text-white font-patrick rounded-lg mt-4"
        onClick={() => {
            if(pass === "080222") {
                setAuthorized(true);
            } else {
                setTouch(true);
            }
        }}
      >
        Open
      </button>
    </div>
  );
};

export default Guardian;
