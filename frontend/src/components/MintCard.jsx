import React, { useState, useEffect } from "react";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import preview from "../../../images/2.png";
import MintCounter from "./MintCounter";
import MintButton from "./MintButton";
import CyberSpinner from "./CyberSpinner";
import { CONTRACT_ADDRESS } from "../../constants";
import { CONTRACT_ABI } from "../../constants";
import ImageCarousel from "./ImageCarousel";
import { ethers } from "ethers";

import image0 from "../../../images/0.png";
import image1 from "../../../images/1.png";
import image2 from "../../../images/2.png";
import image3 from "../../../images/3.png";
import image4 from "../../../images/4.png";
import image5 from "../../../images/5.png";
import image6 from "../../../images/6.png";
import image7 from "../../../images/7.png";

const images = [
  { src: image0, alt: "Preview#0" },
  { src: image1, alt: "Preview#1" },
  { src: image2, alt: "Preview#2" },
  { src: image3, alt: "Preview#3" },
  { src: image4, alt: "Preview#4" },
  { src: image5, alt: "Preview#5" },
  { src: image6, alt: "Preview#6" },
  { src: image7, alt: "Preview#7" },
];

const MintCard = () => {
  
  const [txState, setTxState] = useState("initial"); // "initial" | "signing" | "pending" | "success" | "failed"

  const account = useAccount();

  const {
    data: hash,
    writeContract,
    isPending: isWritePending,
    error: writeError,
  } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess,
    isError: isTransactionError,
  } = useWaitForTransactionReceipt({ hash });

  const mint = async () => {
    console.log("Minting...");
    try {
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "mint",
        value: ethers.parseUnits("0.01"),
      });
    } catch (error) {
      console.log("Error minting: " + error);
      handleTxState("failed");
    }
  };

  useEffect(() => {
    if (isWritePending) setTxState("signing");
    if (hash && isConfirming) setTxState("pending");
    if (isSuccess) setTxState("success");
    if (writeError || isTransactionError) setTxState("failed");
  }, [isWritePending, isConfirming, isSuccess, writeError, isTransactionError]);

  const renderContent = () => {
    switch (txState) {
      case "initial":
        return renderIntial();
      case "signing":
        return renderSigning();
      case "pending":
        return renderPending();
      case "success":
        return renderSuccess();
      case "failed":
        return renderFailed();
      default:
        return null;
    }
  }

  const renderIntial = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 rounded-2xl bg-gradient-to-b from-[#0a101c] to-[#0e1525] border-2 border-white/10 w-full max-w-md shadow-md hover:border-white transition-all duration-200">
        <ImageCarousel images={images} />
        <MintCounter />
        <button
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl border-2 border-white/20 hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] transition-all"
          onClick={mint}
          disabled={!account.address}
        >
          {account.address ? "Mint 0.01 ETH" : "Connect Wallet"}
        </button>
      </div>
    );
  }

  const renderSigning = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 rounded-2xl bg-gradient-to-b from-[#0a101c] to-[#0e1525] border-2 border-white/10 w-full max-w-md shadow-md transition-transform hover:scale-[1.02] hover:border-white duration-200">
        <CyberSpinner />
        <h2 className="text-2xl font-bold text-white">Signing Transaction...</h2>
        <p className="text-gray-400">Please confirm the transaction in your wallet.</p>
      </div>
    );
  }
  const renderPending = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 rounded-2xl bg-gradient-to-b from-[#0a101c] to-[#0e1525] border-2 border-white/10 w-full max-w-md shadow-md transition-transform hover:scale-[1.02] hover:border-white duration-200">
        <CyberSpinner />
        <h2 className="text-2xl font-bold text-white">Transaction Pending...</h2>
        <p className="text-gray-400">Please wait while we process your transaction.</p>
      </div>
    );
  }
  const renderSuccess = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 rounded-2xl bg-gradient-to-b from-[#0a101c] to-[#0e1525] border-2 border-white/10 w-full max-w-md shadow-md transition-transform hover:scale-[1.02] hover:border-white duration-200">
        <h2 className="text-2xl font-bold text-white">Transaction Successful!</h2>
        <p className="text-gray-400">Your NFT has been minted successfully.</p>
      </div>
    );
  }
  const renderFailed = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 rounded-2xl bg-gradient-to-b from-[#0a101c] to-[#0e1525] border-2 border-white/10 w-full max-w-md shadow-md transition-transform hover:scale-[1.02] hover:border-white duration-200">
        <h2 className="text-2xl font-bold text-white">Transaction Failed</h2>
        <p className="text-gray-400">Please try again.</p>
      </div>
    );
  }

  return (
    <>
    {renderContent()}
    </>
  );
};

export default MintCard;
