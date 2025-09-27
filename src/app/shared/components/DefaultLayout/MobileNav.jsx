   "use client";
   import { useState } from "react";
   import { Icon } from "@iconify/react";
   import Link from "next/link";
   import ThemeToggle from "@/app/shared/components/ThemeToggle";
   import Image from "next/image";

  import homeIcon from "@iconify/icons-lucide/home";
   import imageIcon from "@iconify/icons-lucide/image"; // ✅ not "images"
   import videoIcon from "@iconify/icons-lucide/video";
   import pencilIcon from "@iconify/icons-lucide/pencil"; // closest to "pencil-off"
   import flaskConicalIcon from "@iconify/icons-lucide/flask-conical"; // instead of "pipette"
   import folderIcon from "@iconify/icons-lucide/folder";


   const MobileNav = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <>
         {/* Top Bar */}
         <nav className="lg:hidden w-full flex justify-between items-center px-4 py-3">
         {/* Left: Logo */}
         <div className="flex items-center gap-2">
             <Image
               src="/images/logo.webp"
               alt="Logo"
               width={25}
               height={25}
               priority
            />
            <span className="font-bold text-lg">Cartolinks</span>
         </div>

         {/* Right: Theme + Hamburger */}
         <div className="flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setMenuOpen(!menuOpen)}>
               <Icon icon="lucide:menu" className="text-2xl cursor-pointer" />
            </button>
         </div>
         </nav>

         {/* Hamburger Drawer */}
         <div
         className={`fixed top-0 right-0 w-64 h-full dark:text-white dark:bg-black shadow-lg p-4 z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
         }`}
         >
         <button
            className="absolute top-4 right-4"
            onClick={() => setMenuOpen(false)}
         >
            <Icon icon="lucide:x" className="text-2xl cursor-pointer" />
         </button>

         <div className="flex flex-col gap-10 mt-15">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 cursor-pointer">
               <Icon icon="lucide:image" className="text-xl" />
               <span>Gallery</span>
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 cursor-pointer">
               <Icon icon="lucide:headset" className="text-xl" />
               <span>Support</span>
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 cursor-pointer">
               <Icon icon="lucide:bell" className="text-xl" />
               <span>Notifications</span>
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 cursor-pointer">
               <Icon icon="lucide:user" className="text-xl" />
               <span>Profile</span>
            </Link>
         </div>
         </div>

         {/* Bottom Nav */}
         <div className="lg:hidden fixed bottom-0 dark:text-white left-0 w-full dark:bg-black border-t border-gray-300 dark:border-gray-700 flex justify-around py-2 z-40">
         <Link href="/" className="flex flex-col items-center gap-2 cursor-pointer">
            <Icon icon={homeIcon} className="text-xl" />
            <span className="text-sm sm:text-lg">Home</span>
         </Link>
         <Link href="./gallery/" className="flex flex-col items-center gap-2 cursor-pointer">
            <Icon icon={imageIcon} className="text-xl" />
            <span className="text-sm sm:text-lg">Gallery</span>
         </Link>
         <Link href="/video" className="flex flex-col items-center gap-2 cursor-pointer">
            <Icon icon={videoIcon} className="text-xl" />
            <span className="text-sm sm:text-lg">Video</span>
         </Link>
         <Link href="/realTime" className="flex flex-col items-center gap-2 cursor-pointer">
            <Icon icon={pencilIcon} className="text-xl" />
            <span className="text-sm sm:text-lg">Realtime</span>
         </Link>
         <Link href="/edit" className="flex flex-col items-center gap-2 cursor-pointer">
            <Icon icon={flaskConicalIcon} className="text-xl" />
            <span className="text-sm sm:text-lg">Edit</span>
         </Link>
         <Link href="/file" className="flex flex-col items-center gap-2 cursor-pointer">
            <Icon icon={folderIcon} className="text-2xl" />
            <span className="text-sm sm:text-lg">File</span>
         </Link>
         </div>
      </>
   );
};

export default MobileNav;
