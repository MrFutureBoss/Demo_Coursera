import React from 'react'
import { Radio } from 'antd'
import type { RadioChangeEvent } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { AppstoreOutlined } from '@ant-design/icons';

interface RadioCardAndListProps {
    value: string;
    onChange: (e: RadioChangeEvent) => void;
}

export default function RadioCardAndList({ value, onChange }: RadioCardAndListProps) {

  return (
    <Radio.Group
       onChange={onChange}
       value={value}
    >
     <Radio.Button value="card"><AppstoreOutlined /></Radio.Button>
     <Radio.Button value="list"><UnorderedListOutlined /></Radio.Button>
    </Radio.Group>
  )
}
