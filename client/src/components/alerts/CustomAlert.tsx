import React from 'react'
import { Alert } from 'antd'

export default function CustomAlert({ message, type }: { message: string, type: 'success' | 'error' | 'warning' | 'info' }) {
  return (
    <Alert message={message} type={type} />
  )
}
