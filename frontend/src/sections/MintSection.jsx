import React from "react";
import MintCard from "../components/MintCard";

const MintSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[80%] px-4 pb-20 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 text-transparent bg-clip-text uppercase font-space">
          Cyron
        </h2>
        <p className="text-3xl mt-2 text-purple-500 tracking-wider font-satoshi">
          Genesis Collection
        </p>
      </div>

      <MintCard />
    </section>
  );
};

export default MintSection;
