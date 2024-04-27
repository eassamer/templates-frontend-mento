import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f4d04e] flex justify-center items-center">
      <div className="w-[380px] h-[520px] bg-white 
      rounded-[20px] border-[2px] border-solid
       border-black shadow-[6px_6px_1px_3px_#121212]
       p-6 flex flex-col items-start justify-start gap-4
       ">
        <Image alt="d" src={'/first.svg'} width={100} height={100} className='
          w-[100%] rounded-[10px]
        '/>
        <h1 className="text-[14px] font-bold px-2 py-1 rounded-[5px] bg-[#f4d04e]">Learning</h1>
        <p className="text-[14px] text-[#121212] font-medium">Published 21 Dec 2023</p>
        <h1 className='text-[24px] text-[#121212] font-bold'>HTML & CSS foundations</h1>
        <p className='text-[16px] font-normal text-[#808080]'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className=' w-fit h-fit flex justify-center items-center gap-3'>
          <Image src={'/avatar.webp'} alt="avatar" width={30} height={30}/>
          <p className='text-[#121212] text-[14px] font-bold'>Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}