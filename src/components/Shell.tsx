import { HeartIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

interface ShellProps {
  authorize: boolean;
}

const Shell: React.FC<ShellProps> = ({authorize}) => {
  const [show, setShow] = useState(false);
  const [windowShow, setWindowShow] = useState(false);
  useEffect(() => {
    if(authorize) {
      setTimeout(() => setWindowShow(true), 450)
      setTimeout(() => setShow(true), 900)
    }
  },[authorize]);
  return (
    <div className="w-screen min-h-screen flex p-6 pb-0 items-center flex-col bg-teal-400">
      <div className={`w-full bg-white rounded p-3 relative ${windowShow ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity"} transition-all duration-[450ms]`}>
        <div className={`w-full border rounded border-teal-300 p-3 font-patrick ${show ? "opacity-100" : "opacity-0"} transition-all duration-300`}>
          <p className="border-b">Jakarta, 12 Oktober 2022</p>
          <div className="h-6 border-b"></div>
          <div className="h-6 border-b"></div>
          <p className="border-b">Untuk yang aku paling cintai,</p>
          <div className="h-6 border-b"></div>
          <p className="text-justify">Semoga ratna selalu dalam lindungan Allah SWT dan dilancarkan segala urusannya. Maaf apabila bentuk surat sebenarnya namun tidak mengurangi rasa sayang aku pada kamu. Terima kasih untuk selalu ada untukku meskipun kamu jauh disana, maaf jika aku sering buat kamu khawatir. Sejujurnya semenjak kita menjalin hubungan ini hidupku kini menjadi penuh warna dari sebelumnya, meskipun aku terlihat senang pada umumnya namun saat menjalin hubungan yang lebih jauh dengan kamu semua terasa berbeda. Aku tak pandai merangkai kata kata tetapi sekali lagi tidak mengurangi rasa sayang dan cintaku padamu</p>
          <p className="border-b">Sekian untuk surat dariku</p>
          <p className="h-6 border-b"></p>
          <p className="border-b">With love,</p>
          <p className="h-6 border-b"></p>
          <p className="border-b">Reza Pahlawan</p>
        </div>
        <HeartIcon className="absolute -bottom-6 -right-6 w-20 text-pink-500 -rotate-[30deg] animate-bounce" />
      </div>
      <div className="w-full flex items-center justify-center gap-2 py-4 mt-4">
        <p className="font-bold text-white font-patrick">Made with full of</p>
        <HeartIcon className="w-8 text-pink-500" />
      </div>
    </div>
  );
};

export default Shell;
