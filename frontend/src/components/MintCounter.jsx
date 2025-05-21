import React, { useEffect } from 'react'
import { CONTRACT_ADDRESS } from '../../constants'
import { CONTRACT_ABI } from '../../constants'
import { useReadContract } from 'wagmi'

const MintCounter = () => {

  const {data: supply, isLoading, isError} = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getTotalSupplyAndMaxSupply",
  })

  useEffect(() => {
    if (isLoading) {
      console.log("Loading supply data...");
    } else if (isError) {
      console.log("Error");
    } else if (supply) {
      console.log(supply)
    }

  }, [supply])

  return (
    <div>
        {supply && (
          <p>{supply[0]} / {supply[1]} minted</p>
        )}
    </div>
  )
}

export default MintCounter