import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-center w-screen'>
        <input
            type="text" 
            placeholder='Search...'
            className='h-12 w-2/3 font-bold text-2xl p-8 m-8 text-black border-2 border-black rounded-xl' 
        />
        
    </div>
  )
}

export default Search