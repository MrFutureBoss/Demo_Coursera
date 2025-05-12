import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React from "react";
import DragAble from "@/components/drag&drop/match_information/DragAble";
import DropAble from "@/components/drag&drop/match_information/DropAble";

interface DnDContainerProps {
  options: { id: string; label: string }[];
  answers: { id: string; label: string }[];
  onAnswered?: () => void;
}

export default function DnDContainer({
  options,
  answers,
  onAnswered,
}: DnDContainerProps) {
  const [items, setItems] = React.useState(options);
  const [items2, setItems2] = React.useState(answers);


  // mapping: { [optionId]: answer }
  const [mapping, setMapping] = React.useState<{ [optionId: string]: { id: string; label: string } }>({});
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && typeof over.id === 'string') {
      // over.id là id của option (drop zone)
      const optionId = over.id;
      // Nếu option này đã có đáp án thì không nhận thêm
      if (mapping[optionId]) return;
      const answer = items2.find((item2) => item2.id === active.id);
      if (answer) {
        setMapping(prev => ({ ...prev, [optionId]: answer }));
        setItems2(items2.filter((item2) => item2.id !== answer.id));
      }
    }
  };

  // Xóa đáp án khỏi option, trả về vùng answers
  const handleRemoveFromDrop = (optionId: string) => {
    const answer = mapping[optionId];
    if (answer) {
      setItems2(prev => [...prev, answer]);
      setMapping(prev => {
        const newMap = { ...prev };
        delete newMap[optionId];
        return newMap;
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-6 justify-between">
        <div className="">
          {items.map((item) => (
            <DropAble
              id={item.id}
              key={item.id}
              option_id={item.id}
              option_label={item.label}
              answer={mapping[item.id]}
              onRemoveItem={handleRemoveFromDrop}
              onAnswered={onAnswered}
            />
          ))}
        </div>
        <div>
          {items2.map((item2) => (
            <DragAble key={item2.id} id={item2.id} label={item2.label} />
          ))}
        </div>
      </div>
    </DndContext>
  );
}
