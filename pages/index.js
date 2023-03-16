import Index from "./components";
import NavBar from "./components/navigation/NavBar";
import ProductMenuItem from "./components/product/ProductMenuItem";
import { products } from "./components/product/productData.js";
import ProductItem from "./components/product/ProductItem";

export default function Home({ data }) {
  return (
    <Index>
      <NavBar />
      <hr />
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">View Categories</h3>
        <div className="flex justify-start items-center space-x-4 overflow-x-scroll snap-x">
         {products && products.map((p, index) => (
            <ProductMenuItem data={p} key={index}/>
         ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4">
          {data && data.products && data.products.map((p) => (
            <ProductItem data={p} key={p.id}/>
          ))}
        </div>
      </div>
    </Index>
  );
}

export  async function getServerSideProps() {
  const data = await fetch("https://dummyjson.com/products").then((res) => res.json());
  return {
    props: {
      data
    }
  };
}

