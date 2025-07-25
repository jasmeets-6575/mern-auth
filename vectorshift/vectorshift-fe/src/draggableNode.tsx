import React from "react";

interface DraggableNodeProps {
  type: string;
  label: string;
}

export const DraggableNode: React.FC<DraggableNodeProps> = ({ type, label }) => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
    const appData = { nodeType };
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
    event.dataTransfer.effectAllowed = "move";
    event.currentTarget.style.cursor = "grabbing";
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.cursor = "grab";
  };

  return (
    <div
      className={type}
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "8px",
        backgroundColor: "#1C2536",
      }}
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
