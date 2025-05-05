import { Tag } from 'antd'
import React from 'react'
import colorRandom from '@/utilities/colorRandom'

export default function TeamTag({content}: {content: string}) {
  return (
    <Tag color={colorRandom[Math.floor(Math.random() * colorRandom.length)]} >{content}</Tag>
  ) 
}
