import Index from "./components";
import ProductItem from "./components/product/ProductItem";

export default function Home({ data }) {
  return (
    <Index>
      <div className="space-y-4">
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

