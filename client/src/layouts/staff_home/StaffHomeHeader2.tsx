'use client'
import React from 'react'
import header2 from '@/styles/staff_home_styles/staff_home_header2.module.css'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];


export default function StaffHomeHeader2() {
  return (
    <div className={header2.staff_header2}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
