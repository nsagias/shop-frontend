import { PuzzlePieceIcon } from "@heroicons/react/24/outline";

export default function ProductMenuItem ({ data }) {
  return (
    <div className="flex justify-start items-center space-x-2 px-4 py-2 bg-gray-200 rounded-full font-semibold snap-start cursor-pointer hover:brightness-75 transition-all">
      <PuzzlePieceIcon className="w5 h-5" />
      <span>{data.name}</span>
    </div>
  );
}