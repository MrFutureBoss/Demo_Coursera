import { DndContext, DragEndEvent } from '@dnd-kit/core';
import React, { useState } from 'react';
import DragAble from './DragAble';
import DropAble from './DropAble';

const initialItems = [
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
  { id: '3', label: 'Item 3' }
];

export default function DnDContainer() {
  const [items, setItems] = useState(initialItems);
  const [droppedItems, setDroppedItems] = useState<{ id: string; label: string }[]>([]);

  const LIMIT = 1;
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && over.id === 'drop-zone') {
      if (droppedItems.length >= LIMIT) return;
      const draggedItem = items.find(item => item.id === active.id);
      if (draggedItem && !droppedItems.some(i => i.id === draggedItem.id)) {
        setDroppedItems([...droppedItems, draggedItem]);
        setItems(items.filter(item => item.id !== draggedItem.id));
      }
    }
  };

  const handleRemoveFromDrop = (id: string) => {
    const removedItem = droppedItems.find(item => item.id === id);
    if (removedItem) {
      setDroppedItems(droppedItems.filter(item => item.id !== id));
      setItems([...items, removedItem]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex', gap: 32 }}>
      <div>
          <h3>Drop Area</h3>
          <DropAble id="drop-zone" items={droppedItems} onRemoveItem={handleRemoveFromDrop} />
        </div>
        <div>
          <h3>Drag Area</h3>
          {items.map(item => (
            <DragAble key={item.id} id={item.id} label={item.label} />
          ))}
        </div>
      </div>
    </DndContext>
  );
}


