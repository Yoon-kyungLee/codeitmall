import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import instance from "@/lib/axios";
import styles from "@/styles/Search.module.css";
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import Head from "next/head";

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getProducts(query) {
    const res = await instance.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <>
      <Head>
        <title>{q} 검색 결과 - CodeitMall</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
