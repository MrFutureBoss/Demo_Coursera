import React from 'react'
import { FaAward } from "react-icons/fa";

export default function Award({size, color}: {size: string, color: string}) {
  return (
    <FaAward style={{ fontSize: size, color: color }} />
  )
}
