import { Tabs } from 'antd'
import React from 'react'
import type { TabsProps } from 'antd';


export default function CustomTabs({items}: {items: TabsProps['items']}) {
  return (
    <Tabs defaultActiveKey="1" items={items} />
  )
}
