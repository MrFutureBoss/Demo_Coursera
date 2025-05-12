import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DropAbleProps {
  id: string;
  option_id: string;
  option_label: string;
  answer?: { id: string; label: string };
  onRemoveItem?: (optionId: string) => void;
  onAnswered?: () => void;
}

export default function DropAble({
  id,
  option_id,
  option_label,
  answer,
  onRemoveItem,
  onAnswered,
}: DropAbleProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const answeredRef = React.useRef(false);
  React.useEffect(() => {
    if (!answeredRef.current && answer && onAnswered) {
      onAnswered();
      answeredRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  return (
    <div>
      <h3>{option_label}</h3>
      <div
        ref={setNodeRef}
        style={{
          minHeight: 40,
          minWidth: 180,
          maxWidth: 350,
          border: "2px dashed #aaa",
          background: isOver ? "#e0ffe0" : "#f9f9f9",
          borderRadius: 8,
          marginBottom: 12,
          padding: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {answer ? (
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: 12 }}
          >
            <span style={{ marginRight: 8 }}>{answer.label}</span>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#f87171",
                padding: 0,
              }}
              title="Return answer"
              onClick={() => onRemoveItem && onRemoveItem(option_id)}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 9V15"
                  stroke="#f87171"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M13 9V15"
                  stroke="#f87171"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 6H16"
                  stroke="#f87171"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 6L5.5 16C5.5 17 6 18 7 18H13C14 18 14.5 17 14.5 16L15 6"
                  stroke="#f87171"
                  strokeWidth="2"
                />
                <path
                  d="M8 6V4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V6"
                  stroke="#f87171"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        ) : (
          <span style={{ color: "#bbb", marginLeft: 12 }}>
            Drag one answer here
          </span>
        )}
      </div>
    </div>
  );
}
