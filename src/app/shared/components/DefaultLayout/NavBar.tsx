   "use client";
   import ThemeToggle from "@/app/shared/components/ThemeToggle";
   import useTheme from "@/app/shared/hooks/useTheme";
   import { Icon } from "@iconify/react";
   import { useEffect, useState } from "react";
   import MobileNav from "@/app/shared/components/DefaultLayout/MobileNav";
   import Link from "next/link";
   import Image from "next/image";

   const NavBar = () => {
   const { resolvedTheme } = useTheme();
   const [notificationsOn, setNotificationsOn] = useState(true);

   useEffect(() => {
      if (typeof window !== "undefined") {
         console.log("[NavBar Debug] resolvedTheme:", resolvedTheme);
         console.log(
         "[NavBar Debug] html.classList:",
         document.documentElement.classList.value
         );
      }
   }, [resolvedTheme]);

   return (
      <>
         {/* Desktop Navbar */}
         <nav className="hidden lg:grid w-full mx-auto max-w-[1400px] grid-cols-3 items-center px-6 py-3">
         {/* Left: Logo */}
         <div className="flex items-center gap-2 justify-start">
            <Image
               src="/images/logo.webp"
               alt="Logo"
               width={35}
               height={35}
               priority
            />
            <span className="font-bold lg:text-[32px] lg:leading-[40px] lg:tracking-[-1.28px]">
               Cartolinks
            </span>
         </div>

         {/* Center: Main navigation icons */}
         <div
            className="flex items-center gap-8 justify-center 
               bg-white dark:bg-gray-800 rounded-lg py-2 px-4 w-fit mx-auto"
         >
            <Link href="/" title="Home" className="cursor-pointer">
               <Icon icon="lucide:home" className="text-xl" />
            </Link>
            <Link href="/gallery" title="Gallery" className="cursor-pointer">
               <Icon icon="lucide:images" className="text-xl" />
            </Link>
            <Link href="/video" title="Video" className="cursor-pointer">
               <Icon icon="lucide:video" className="text-xl" />
            </Link>
            <Link href="/realTime" title="Realtime" className="cursor-pointer">
               <Icon icon="lucide:pencil-off" className="text-xl" />
            </Link>
            <Link href="/edit" title="Edit" className="cursor-pointer">
               <Icon icon="lucide:pipette" className="text-xl" />
            </Link>
            <Link href="/file" title="Files" className="cursor-pointer">
               <Icon icon="lucide:folder" className="text-xl" />
            </Link>
         </div>

         {/* Right: Named icons, theme toggle, profile */}
         <div className="flex items-center gap-2 justify-end">
            <div
               className="flex items-center gap-2 cursor-pointer 
                  bg-gray-200 dark:bg-gray-800 rounded-lg py-2 px-2"
            >
               <Icon icon="lucide:image" className="text-xl" />
               <span className="hidden sm:inline">Gallery</span>
            </div>
            <div
               className="flex items-center gap-2 cursor-pointer 
                  bg-white dark:bg-gray-800 rounded-lg py-2 px-2"
            >
               <Icon icon="lucide:headset" className="text-xl" />
               <span className="hidden sm:inline">Support</span>
            </div>

            {/* Notifications toggle */}
            <button
               onClick={() => setNotificationsOn(!notificationsOn)}
               title={notificationsOn ? "Mute Notifications" : "Unmute Notifications"}
               className="bg-gray-100 dark:bg-gray-800 rounded-full py-2 px-2"
            >
               <Icon
               icon={notificationsOn ? "lucide:bell" : "lucide:bell-off"}
               className="text-xl cursor-pointer"
               />
            </button>

            <ThemeToggle />
            <div
               className="flex items-center justify-center w-8 h-8 rounded-full 
                  bg-orange-500 text-white font-bold text-lg cursor-pointer"
            >
               A
            </div>
         </div>
         </nav>

         {/* Mobile Navbar */}
         <MobileNav />
      </>
   );
   };

   export default NavBar;
