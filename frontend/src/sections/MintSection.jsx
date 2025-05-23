import React from "react";
import MintCard from "../components/MintCard";
import { useWriteContract } from "wagmi";
import { CONTRACT_ADDRESS } from "../../constants";
import { CONTRACT_ABI } from "../../constants";

const MintSection = () => {

  const { writeContract } = useWriteContract();

  const handleWithdraw = async () => {
    console.log("Withdrawing...");
    try {
      const {data: response} = writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "withdraw",
      });
    }
    catch (error) {
      console.log("Error withdrawing: " + error);
    }
  }

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

      <div className="flex flex-col items-center justify-center mt-18">
        <button className="px-6 py-2 text-white rounded-md border-2 border-black bg-purple-600 hover:border-white" onClick={handleWithdraw}>Withdraw</button>
      </div>
    </section>
  );
};

export default MintSection;
