"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number]; //one element of the array

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ isAnyOpen, category, handleOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
          className="gap-1.5"
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>


        {isOpen ? (
            <div 
                className={cn('absolute inset-x-0 top-full text-sm text-muted-foreground',
                 {
                    'animate-in fade-in-10 slide-in-form-top-5': 
                    !isAnyOpen,
                 }
            )}>
                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden='true'/>

                 <div className="relative bg-white">
                    <div className="mx-auto max-7xl px-8">
                        <div className="grid grid-cols-4 gap-x-8 gap-8-10 py-16">
                            <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                                {category.featured.map((item) => (
                                    <div className="group relative text-base sm:text-sm" key={item.name}>
                                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <Image
                                                src={item.image}
                                                alt='product category image'
                                                fill
                                                className="object-cover object-center"
                                                />
                                        </div>
                                        <Link href={item.href} className="mt-6 block font-medium text-gray-900">
                                            {item.name}
                                        </Link>  
                                        <p className="mt-1" aria-hidden='true'>Shop Now</p>                                         
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                 </div>

            </div>
        ):null}

    </div>
  );
};

export default NavItem;
