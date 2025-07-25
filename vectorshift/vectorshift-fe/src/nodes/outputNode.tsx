import { useState, ChangeEvent } from "react";
import { NodeProps } from "reactflow";
import BaseNode from "./BaseNode"; // Adjust path if needed

interface OutputNodeData {
  outputName?: string;
  outputType?: "Text" | "Image";
}

export const OutputNode = ({ id, data }: NodeProps<OutputNodeData>) => {
  const [currName, setCurrName] = useState<string>(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState<"Text" | "Image">(
    data?.outputType || "Text"
  );

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOutputType(e.target.value as "Text" | "Image");
  };

  return (
    <BaseNode id={id} title="Output" inputs={["value"]}>
      <div className="flex flex-col gap-3">
        <label className="text-sm text-text-primary flex flex-col">
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="w-full border border-border-base rounded px-2 py-1 text-sm bg-white text-black"
          />
        </label>

        <label className="text-sm text-text-primary flex flex-col">
          Type:
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="w-full border border-border-base rounded px-2 py-1 text-sm bg-white text-black"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
