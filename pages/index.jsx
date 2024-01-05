import { useState, useEffect } from "react";
import instance from "@/lib/axios";
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await instance.get("/products");
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <SearchForm />
      <ProductList products={products} />
    </>
  );
}
