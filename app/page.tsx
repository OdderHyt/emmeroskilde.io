import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex">
          <p className="flex-1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam eius obcaecati rerum nulla adipisci, libero, quasi cum illum veniam velit doloribus expedita dolorum fugiat rem delectus dignissimos, voluptatum architecto?</p>
          <Image 
            src="/flip-flop.jpg" 
            alt="Flip-Flop" 
            width={400} height={400} 
            className="flex-1 bg-amber-50 text-black text-center text-" />
        </div>
      </main>
    </div>
  );
}
