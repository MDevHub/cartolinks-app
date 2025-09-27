   "use client";
   import React from "react";
   import { Icon } from "@iconify/react";

   const Gallery = () => {
   // Data for cards
   const items = [
      {
         title: "Image",
         desc: "Generate image with custom styles in flux and ideogram",
         icon: "lucide:image",
         bg: "dark:bg-yellow-800",
         isNew: true,
      },
      {
         title: "Video",
         desc: "Generate image with custom sdhhgs in flux and ideogram",
         icon: "lucide:video",
         bg: "bg-yellow-100 dark:bg-yellow-900",
         isNew: false,
      },
      {
         title: "Realtime",
         desc: "Generate image with custom styles in flux and ipsum",
         icon: "lucide:pencil-off",
         bg: "bg-blue-100 dark:bg-blue-900",
         isNew: false,
      },
      {
         title: "Enhancer",
         desc: "Generate image with lorem styles in flux and ideogram",
         icon: "lucide:sparkles",
         bg: "bg-gray-100 dark:bg-gray-800",
         isNew: true,
      },
      {
         title: "Edit",
         desc: "Generate lorm with custom styles in flux and ideogram",
         icon: "lucide:edit",
         bg: "bg-purple-100 dark:bg-purple-900",
         isNew: true,
      },
      {
         title: "Video Lipsync",
         desc: "Generate image sumsum styles in flux and ideogram",
         icon: "lucide:mic",
         bg: "bg-black text-white",
         isNew: false,
      },
      {
         title: "Motion Transfer",
         desc: "Generate image with custom styles in fluh ipsum sumn",
         icon: "lucide:move",
         bg: "bg-black text-white",
         isNew: false,
      },
      {
         title: "Train",
         desc: "Generate image with custom styles in fluh ipsum sumn",
         icon: "lucide:brain",
         bg: "bg-black text-white",
         isNew: true,
      },
   ];

   return (
      <div className="py-6">
         {/* Header */}
         <div className="flex justify-between items-center mb-6">
            <h1 className="font-bold text-xl">Generate</h1>
           <div className="flex items-center gap-2">
               <button className="cursor-pointer font-bold text-blue-500 flex items-center gap-1">
                 <Icon icon="lucide:chevron-down" className="text-xl" /> 
                 Show All 
               </button>
             </div>
            
         </div>

         {/* Grid */}
         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
         {items.map((item, i) => (
            <div
               key={i}
               className="flex justify-between items-center transition"
            >
               {/* Left: Icon + text */}
               <div className="flex flex-row gap-2 items-center">
                  <div
                     className={`px-2 py-2 flex items-center justify-center rounded-lg ${item.bg}`}
                  >
                     <Icon icon={item.icon} className="text-xl" />
                  </div>
                  <div>
                     <div className="flex items-center gap-2">
                        <h2 className="font-semibold">{item.title}</h2>
                        {item.isNew && (
                        <span className="bg-blue-800 text-white text-xs px-2 py-0.5 rounded-full">
                           New
                        </span>
                        )}
                     </div>
                     <p className="text-sm ">
                        {item.desc}
                     </p>
                  </div>
               </div>

               {/* Right: Open Button */}
               <button className="ml-4 dark:bg-blue-800 bg-gray-800 text-white px-3 py-1 cursor-pointer rounded-full text-sm">
               Open
               </button>
            </div>
         ))}
         </div>
      </div>
   );
};

export default Gallery;
