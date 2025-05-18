import React from 'react'

const MintButton = () => {
  return (
    <button class="
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
    ">
      <span class="relative z-10">Mint 0.01ETH</span>
      <div class="
        absolute
        inset-0
        bg-gradient-to-r from-blue-500/30 to-purple-600/30
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
      "></div>
    </button>
  )
}

export default MintButton