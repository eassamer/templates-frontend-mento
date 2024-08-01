"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [adviceSelected, setAdviceSelected] = useState({
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    id: 117,
  });
  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdviceSelected(data.slip);
    console.log(data);
    return data;
  };
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    fetchAdvice();
    setIsClicked(true);
  };
  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 400);
    }
  }, [isClicked]);
  return (
    <main className="w-[100vw] h-[100vh] bg-[#1f2632]  flex items-center justify-center ">
      <div className=" relative sm:w-[470px] h-fit w-[300px] py-12 bg-[#323a49] rounded-[15px] flex  gap-[20px] flex-col items-center sm:px-11 px-4 justify-center">
        <h1 className="font-manrope font-bold text-[10px] text-[#52ffa8] tracking-[0.2em]">
          ADVICE #{adviceSelected.id}
        </h1>
        <p className="font-manrope font-bold text-[#cee3e9] text-[25px] text-center">
          {'"' + adviceSelected.advice + '"'}
        </p>
        <Image
          src="/pattern-divider-desktop.svg"
          alt="divider"
          width={100}
          height={100}
          className="w-[90%] items-center justify-center"
        />
        
        <div
          onClick={handleClick}
          className="w-[50px] h-[50px] bg-[#52ffa8] rounded-[50%] flex items-center justify-center absolute bottom-[-25px] transition-all duration-300 cursor-pointer hover:shadow-[0_3px_30px_#52ffa8]"
        >
          <Image
            src="/icon-dice.svg"
            alt="dice"
            width={20}
            height={20}
            className={`${isClicked ? "animate-spin" : ""}`}
          />
        </div>
      </div>
    </main>
  );
}
