import { useEffect, useState, ChangeEvent } from "react";
import { NodeProps } from "reactflow";
import BaseNode from "./BaseNode"; // adjust the path if needed

interface TextNodeData {
  text?: string;
}

export const TextNode = ({ id, data }: NodeProps<TextNodeData>) => {
  const [currText, setCurrText] = useState<string>(data?.text || "{{input}}");
  const [variables, setVariables] = useState<string[]>([]);

  // regex to extract {{variable}} names
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const found = new Set<string>();
    let match;
    while ((match = regex.exec(currText))) {
      found.add(match[1]);
    }
    setVariables([...found]);
  }, [currText]);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode id={id} title="Text" inputs={variables} outputs={["output"]}>
      <label className="text-sm text-text-primary flex flex-col">
        Text:
        <input
          type="text"
          value={currText}
          onChange={handleTextChange}
          className="w-full border border-border-base rounded px-2 py-1 text-sm bg-white text-black"
        />
      </label>
    </BaseNode>
  );
};
