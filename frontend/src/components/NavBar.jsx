import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center w-[92%] mx-auto py-5'>
        <h2 className='text-white font-semibold text-3xl'>CyronNFT</h2>
        <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Connect Wallet
    </button>
    </nav>
  )
}

export default NavBar