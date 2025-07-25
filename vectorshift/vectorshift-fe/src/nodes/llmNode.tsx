import { NodeProps } from "reactflow";
import BaseNode from "./BaseNode"; // Adjust the path if needed

interface LLMNodeData {
  system?: string;
  prompt?: string;
}

export const LLMNode = ({ id }: NodeProps<LLMNodeData>) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={["system", "prompt"]}
      outputs={["response"]}
    >
      <div className="text-sm text-text-secondary">
        This is a LLM.
      </div>
    </BaseNode>
  );
};
