import { Tag } from 'antd'
import React from 'react'
import colorRandom from '@/utilities/random/colorRandom'

export default function TeamTag({content}: {content: string}) {
  return (
    <Tag color="blue" >{content}</Tag>
  ) 
}
