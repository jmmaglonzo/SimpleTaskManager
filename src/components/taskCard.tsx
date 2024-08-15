import { PencilIcon, Trash } from "lucide-react";

export default function TaskCard() {
  return (
    <div className="flex items-center justify-between w-full p-6">
      <p>Learn React</p>
      <div className="flex items-center gap-4">
        <PencilIcon size={20} />
        <Trash size={20} />
      </div>
    </div>
  );
}
