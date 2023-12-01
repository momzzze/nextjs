import { UserButton,SignedOut,SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <link rel="icon" href="/drop.ico" />
      <Link href="/" className="flex items-center space-x-5 ">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt="logo"
            width={50}
            height={50}
            className="invert "
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <ModeToggle/>
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
            <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
        </SignedOut>
      </div>

    </header>
  );
};

export default Header;
