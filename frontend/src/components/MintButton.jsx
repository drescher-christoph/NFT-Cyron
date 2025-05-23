import React, { useEffect } from "react";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../../constants";
import { CONTRACT_ABI } from "../../constants";

const MintButton = ({ handleTxState }) => {
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
    error: transactionError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isWritePending) {
      handleTxState("signing");
      return;
    }
    if (hash && isConfirming) {
      handleTxState("pending");
      return;
    }
    if (hash && isSuccess) {
      handleTxState("success");
      return;
    }
    if (writeError || isTransactionError) {
      handleTxState("failed");
      return;
    }
  }, [
    hash,
    isConfirming,
    isSuccess,
    isWritePending,
    writeError,
    isTransactionError,
    transactionError,
    handleTxState,
  ]);

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

  return (
    <>
      {account.address === undefined ? (
        <p>Please connect your wallet to mint</p>
      ) : (
        <button
          class="
            px-8 py-4
            bg-gradient-to-r from-blue-500 to-purple-600
            backdrop-blur-lg
            text-white  
            font-semibold
            rounded-2xl   
            border-2 border-white/20
            shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]
            hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)]
            hover:-translate-y-0.5
            transition-all
            duration-300
            relative
            overflow-hidden
            group
          "
          onClick={mint}
        >
          <span class="relative z-10">Mint 0.01ETH</span>
          <div
            class="
        absolute
        inset-0
        bg-gradient-to-r from-blue-500/30 to-purple-600/30
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
      "
          ></div>
        </button>
      )}
    </>
  );
};

export default MintButton;
