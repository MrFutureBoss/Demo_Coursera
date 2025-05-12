import React from "react";
import { Button, Modal } from "antd";

export default function ConfirmModal({ title, content, open, onCancel, onSubmit }: { title: string, content: string, open: boolean, onCancel: () => void, onSubmit: () => void }) {
  return <Modal 
  open={open} 
  title={<p>{title}</p>}
  onOk={onSubmit}
  onCancel={onCancel}
  footer={[
    <Button key="back" color="primary" variant="solid" onClick={onCancel}>
       No
    </Button>,
    <Button key="submit" color="primary" variant="outlined" onClick={onSubmit}>
      Yes
    </Button>,
  ]}
  >
    <p>{content}</p>
  </Modal>;
}
