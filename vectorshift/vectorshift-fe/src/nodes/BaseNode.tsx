import React, { ReactNode, CSSProperties } from "react";
import { Handle, Position } from "reactflow";

interface BaseNodeProps {
  id: string;
  data?: any;
  title: string;
  inputs?: string[];
  outputs?: string[];
  style?: CSSProperties;
  children?: ReactNode;
}

const BaseNode: React.FC<BaseNodeProps> = ({
  id,
  title,
  inputs = [],
  outputs = [],
  style = {},
  children,
}) => {
  return (
    <div
      className="relative w-[260px] rounded-xl border-2 border-borderBase bg-white text-textPrimary shadow-node p-4 hover:bg-hover duration-150"
      style={style}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-base">{title}</h2>
        <div className="flex gap-1 text-sm text-textSecondary opacity-70">
          <button title="Expand">⤢</button>
          <button title="Settings">⚙️</button>
          <button title="Delete">🗑️</button>
        </div>
      </div>

      {/* Body */}
      <div className="text-sm">{children}</div>

      {/* Input Handles */}
      {inputs.map((handleId, idx) => (
        <Handle
          key={`in-${handleId}`}
          id={handleId}
          type="target"
          position={Position.Left}
          className="!bg-handleInput w-3 h-3 border-2 border-white"
          style={{ top: `${((idx + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((handleId, idx) => (
        <Handle
          key={`out-${handleId}`}
          id={handleId}
          type="source"
          position={Position.Right}
          className="!bg-handleOutput w-3 h-3 border-2 border-white"
          style={{ top: `${((idx + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
