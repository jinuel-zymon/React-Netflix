import React from 'react'

const Pill = () => {
  return (
    <span className={`text-xs py-0.5 px-2.5 rounded-lg ${true ? "bg-[#06380e] text-success": "bg-gray-300 text-gray-700"}`}>
      Active
    </span>
  )
}

export default Pill