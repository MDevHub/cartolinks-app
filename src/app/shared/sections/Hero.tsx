"use client";

import React from "react";
import Corousal from "@/app/shared/components/Corousal";
import Card from "@/app/shared/components/Card";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 items-start">
        {/* Left: Corousal (takes 2/3) */}
        <div className="lg:col-span-3">
          <Corousal />
        </div>

        {/* Right: Card (takes 1/3) */}
        <div className="lg:col-span-2">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Hero;
