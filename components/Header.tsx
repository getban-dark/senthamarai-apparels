import React from "react";
import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  // const session = false;
  // use this hook to check if user login with google is working
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-slate-200 p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-14 ">
            <Image src="/lotus.png" layout="fill" objectFit="contain" />
          </div>
        </Link>
      </div>

      <div className=" hidden flex-1 items-center justify-center space-x-8 md:flex ">
        <Link href="#products">
          <a className="headerLink link"> Products </a>
        </Link>
        <a className="headerLink link"> Explore </a>
        <a className="headerLink link"> Support </a>
        <a className="headerLink link"> Business </a>
      </div>
      <div className=" flex items-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headericon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className=" absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headericon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon className="headericon" onClick={() => signIn()} />
        )}
      </div>
    </header>
  );
};

export default Header;
