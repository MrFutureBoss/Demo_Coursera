import { Breadcrumb, Tooltip } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import React from 'react'

export default function CustomBreadCrumb({ name }: { name: string }) {
    return (
        <Breadcrumb
            separator=">"
            items={[
                {
                    title: <Tooltip title="Back to Home"><a className='text-[#5b6780]' href="/"><HomeOutlined style={{ fontSize: '20px', margin: '0' }}/></a></Tooltip>,
                },
                {
                    title: <a className='text-[16px] text-[#5b6780]' href="/categories">Categories</a>,
                },
                {
                    title: <p className='text-[16px] text-[#5b6780]'>{name}</p>,
                }
            ]}
        />
    )
}
