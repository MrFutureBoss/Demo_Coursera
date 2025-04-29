'use client'
import React from 'react'
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import common from '@/styles/common.module.css'

const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'My Account',
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: 'Profile',
      extra: '⌘P',
    },
    {
      key: '3',
      label: 'Billing',
      extra: '⌘B',
    },
    {
      key: '4',
      label: 'Settings',
      icon: <SettingOutlined />,
      extra: '⌘S',
    },
  ];

export default function AccountDropDown() {
  return (
    <Dropdown menu={{ items }} className={common.dropdown_account}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div className='flex justify-center items-center rounded-[50px] bg-blue-800 p-2.5 h-[40px] w-[40px]'><p className='p-0 text-blue-100 font-bold'>M</p></div>
        <p className='p-0 text-blue-500 font-bold'>Welcome! Mai Tú</p>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  )
}
