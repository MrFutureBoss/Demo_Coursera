import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export interface DropAbleProps {
  id: string;
  items: { id: string; label: string }[];
  onRemoveItem?: (id: string) => void;
}

export default function DropAble({ id, items, onRemoveItem }: DropAbleProps) {
  const LIMIT = 1; // Số lượng tối đa item được drop vào
  const { setNodeRef, isOver } = useDroppable({ id });
  const isFull = items.length >= LIMIT;

  return (
    <div
      ref={setNodeRef}
      style={{
        minHeight: 120,
        minWidth: 200,
        border: isFull ? '2px solid #f87171' : '2px dashed #aaa',
        background: isOver && !isFull ? '#e0ffe0' : '#f9f9f9',
        padding: 16,
        borderRadius: 8,
        opacity: isFull && isOver ? 0.7 : 1,
        position: 'relative'
      }}
    >
      {items.length === 0 ? (
        <span style={{ color: '#bbb' }}>Drop here</span>
      ) : (
        items.map(item => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '6px 0', padding: '4px 10px', background: '#dbeafe', borderRadius: 4 }}>
            <span>{item.label}</span>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                marginLeft: 8,
                display: 'flex',
                alignItems: 'center',
                color: '#f87171'
              }}
              title="Trả về Drag"
              onClick={() => onRemoveItem && onRemoveItem(item.id)}
            >
              {/* Trash icon SVG */}
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9V15" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/>
                <path d="M13 9V15" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 6H16" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 6L5.5 16C5.5 17 6 18 7 18H13C14 18 14.5 17 14.5 16L15 6" stroke="#f87171" strokeWidth="2"/>
                <path d="M8 6V4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V6" stroke="#f87171" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        ))
      )}
      {isFull && (
        <div style={{ color: '#f87171', fontSize: 13, marginTop: 8, textAlign: 'center' }}>
          Đã đạt giới hạn {LIMIT} item!
        </div>
      )}
    </div>
  );
}


