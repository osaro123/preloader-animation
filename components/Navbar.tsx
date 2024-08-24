import React from 'react'

const Navbar = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getUTCMonth()
  return (
    <nav className='flex justify-between px-4 py-2'>
        <div>
            <h1>Osaro Lawani</h1>
            <p className='opacity-60'>AVAILABLE - {`'August ${day}`}</p>
        </div>
        <p>Lagos,NG</p>
    </nav>
  )
}

export default Navbar