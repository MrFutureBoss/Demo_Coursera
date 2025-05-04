'use client'
import React from 'react'
import header2 from '@/styles/staff_home_styles/staff_home_header2.module.css'
import { Tabs } from 'antd';
import { useRouter } from 'next/navigation';

// Không cần props nữa
// interface Header2Props {}

const items: Array<{ key: string, label: string, url: string }> = [
  { key: '1', label: 'Home', url: '/' },
  { key: '2', label: 'Dashboard', url: '/dashboard' },
  { key: '3', label: 'Online Degrees', url: '/degrees' },
];

export default function Header2() {
  const router = useRouter();

  const handleTabChange = (key: string) => {
    const item = items.find(i => i.key === key);
    if (item) {
      router.push(item.url);
    }

  };

  return (
    <div className={header2.staff_header2}>
      <Tabs
        onChange={handleTabChange}
        items={items.map(({ key, label }) => ({ key, label }))}
      />
    </div>
  );
}