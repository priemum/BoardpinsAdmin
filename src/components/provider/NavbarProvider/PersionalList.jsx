import React from 'react'

function PersionalList({Navgate}) {
  return (
    <div>            <ul className="font-medium text-dark text-sm p-3 flex flex-col gap-1">
    <li onClick={()=>Navgate('/setting-profile')} className=" cursor-pointer">Profile</li>

    <hr className="mt-2" />
    <li className="text-gray-400 cursor-pointer"  onClick={()=>Navgate('/')} >Logout</li>
  </ul></div>
  )
}

export default PersionalList