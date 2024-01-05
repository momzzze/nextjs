import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
  return (
   <Link className="flex gap-x-3" href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/spooky.svg" alt="TwitchClone" width={32} height={32} />
        </div>
      </div>
      
      <div className={cn('hidden lg:block',font.className)}>
        <p className="text-lg font-semibold">
          GameHub
        </p>
        <p className="text-xs text-muted-foreground">
          Let&apos;s play
        </p>
      </div>

   </Link>
  );
};
