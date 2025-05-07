import { Breadcrumb } from 'antd';
import React from 'react';

interface CustomBreadCrumbProps {
  items: Array<{
    title: React.ReactNode;
    href?: string;
  }>;
}

export default function CustomBreadCrumb({ items }: CustomBreadCrumbProps) {
  return (
    <Breadcrumb
      separator=">"
      items={items}
    />
  );
}