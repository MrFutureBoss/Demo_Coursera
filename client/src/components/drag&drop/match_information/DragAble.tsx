import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export interface DragAbleProps {
  id: string;
  label: string;
}

export default function DragAble({ id, label }: DragAbleProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        minHeight: 20,
        width:'fit-content',
        maxWidth: 350,
        padding: '8px 16px',
        margin: '8px 0',
        background: isDragging ? '#eee' : '#fafafa',
        border: '1px solid #ccc',
        borderRadius: 4,
        cursor: 'grab',
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        opacity: isDragging ? 0.5 : 1
      }}
    >
      {label}
    </div>
  );
}
