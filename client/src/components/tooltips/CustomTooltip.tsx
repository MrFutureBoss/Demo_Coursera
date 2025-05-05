import React from 'react'
import { Tooltip } from 'antd'

export default function CustomTooltip({title, children}: {title: string, children: React.ReactNode}) {
  return (
    <Tooltip
      title={title}
      placement="top"
      color="primary"
      arrow={true}
    >
      {children}
    </Tooltip>
  )
}
