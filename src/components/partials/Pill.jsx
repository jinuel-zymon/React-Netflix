import React from 'react'

const Pill = ({isActive}) => {
  return (
    <span className={`text-xs py-0.5 px-2.5 rounded-lg ${isActive ? "bg-[#06380e] text-success": "bg-gray-300 text-gray-700"}`}>
      {isActive ? "Active" : "Inactive"}
    </span>
  )
}

export default Pill