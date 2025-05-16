import React from 'react'
import { Tooltip } from 'antd'
interface TootipArrowPRightProps {
    children: React.ReactNode;
    title: string;
}

export default function TootipArrowPRight({children, title}: TootipArrowPRightProps) {
  return (
    <div>
        <Tooltip arrow={true} placement="right" title={title} color="blue">
            {children}
        </Tooltip>
    </div>
  )
}
