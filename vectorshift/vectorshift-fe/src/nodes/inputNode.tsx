import { useState, ChangeEvent } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import BaseNode from "./BaseNode";

interface InputNodeData {
  inputName?: string;
  inputType?: "Text" | "File";
}

export const InputNode = ({ id, data }: NodeProps<InputNodeData>) => {
  const [currName, setCurrName] = useState<string>(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState<"Text" | "File">(data?.inputType || "Text");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputType(e.target.value as "Text" | "File");
  };

  return (
    <BaseNode id={id} title="Input" outputs={["value"]}>
      <div className="flex flex-col gap-3">
        <label className="text-sm text-textPrimary flex flex-col">
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="w-full border border-borderBase rounded px-2 py-1 text-sm bg-white text-black"
          />
        </label>
        <label className="text-sm text-textPrimary flex flex-col">
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
            className="w-full border border-borderBase rounded px-2 py-1 text-sm bg-white text-black"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
