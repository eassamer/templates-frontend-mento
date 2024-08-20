import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] bg-white flex items-start justify-start relative">
      <Image
        alt="d"
        src="/bg-main-desktop.png"
        width={100}
        height={100}
        className="w-[38%] h-[100%]"
      />
      <div className="w-[62%] h-[100%] flex justify-center items-center">
        <div className="w-[500px] h-[100px] bg-red-300">

        </div>
      </div>
      <div className="absolute top-[calc(50%-270px)] left-[calc(38%-380px)] shadow-xl rounded-[10px]">
        <Image
          alt="d"
          src="/bg-card-front.png"
          width={700}
          height={570}
          className="w-[470px] h-[260px]"
        />
        <Image
          alt="d"
          src="/card-logo.svg"
          width={100}
          height={100}
          className="w-[90px] h-[50px] absolute top-[10%] left-[7%]"
        />
        <h1 className="text-[26px] font-space font-medium px-2 py-1 rounded-[5px] text-white tracking-[0.18em] absolute bottom-[24%] left-[5%]">
          0000 0000 0000 0000
        </h1>
        <h1 className="text-[13px] font-space font-medium px-2 py-1 rounded-[5px] text-white tracking-[0.18em] absolute bottom-[8%] right-[5%]">
          00/00
        </h1>
        <h1 className="text-[14px] font-space font-medium px-2 py-1 rounded-[5px] text-white tracking-[0.18em] absolute bottom-[8%] left-[5%]">
          EL MEHDI ASSAMER
        </h1>
      </div>
      <div className="absolute top-[calc(100%-400px)] left-[calc(45%-380px)] shadow-2xl rounded-[10px]">
        <Image
          alt="d"
          src="/bg-card-back.png"
          width={700}
          height={570}
          className="w-[500px] h-[270px]"
        />
        <h1 className="text-[13px] font-space font-medium px-2 py-1 rounded-[5px] text-white tracking-[0.18em] absolute top-[44%] right-[9%]">
          000
        </h1>
      </div>
    </main>
  );
}
