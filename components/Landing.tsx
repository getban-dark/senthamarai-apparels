import React from "react";
import Button from "./Button";
import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
const Landing = () => {
  return (
    <section className="m-w-[1350px] sticky top-0 mx-auto flex h-screen items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-purple-900 to-violet-400 bg-clip-text text-transparent">
            Discover
          </span>
          <span className="block">The New You.</span>
          <span className="block">Wear better, look better.</span>
        </h1>
        <div className="space-x-8">
          <Link href="#products">
            <Button title="Buy Now" />
          </Link>
          <a className="link text-lg">Senthamarai-Apparels</a>
        </div>
      </div>
      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600]">
        <Image src="/main.jpg" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
};

export default Landing;
