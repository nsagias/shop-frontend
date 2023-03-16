import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export default function ProductItem({ data }) {
  return (
    <div className="p-4 bg-gray-100 rounded-3xl group cursor-pointer space-y-4 hover:brightness-75 transition-all">
      <img src={data.thumbnail} className="w-72 h-72 border rounded-2xl" />
      <div className="flex items-center justify-between space-x-4">
        <div>
          <h5 className="font-semibold text-lg line-clamp-1">{data.title}</h5>
          <p className="text-gray-500 text-sm">${data.price}</p>
        </div>
        {/* <div>
          <h5>{data.title}</h5>
        </div> */}
        <ArrowSmallRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0"/>
      </div>
    </div>
  );
}