import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function ProductItem({ data }) {
  const [ratingScore, setRatingScore] = useState(5);

  return (
    <div className="bg-white group cursor-pointer space-y-4">
      <img src={data.thumbnail} className="w-60 h-60 border" />
      <div className="flex items-center justify-between space-x-4">
        <div>
          <h5 className="font-semibold text-lg line-clamp-1">{data.title}</h5>
        <div>
        <Rating
          name="product-rating"
          value={ratingScore}
        />
        </div>
        <p className="text-gray-500 text-sm">${data.price}</p>
      </div>
        <ShoppingCartIcon className="w-6 h-6 flex-shrink-0" />
      </div>
    </div>
  );
}