import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchForm.module.css";
import Search from "@/pages/search";

export default function SearchForm({ initialValue = "" }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!value) {
      router.push(`/`);
      return;
    }

    router.push(`/search?q=${value}`);
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        name="q"
        value={value}
        onChange={handleChange}
        placeholder="찾고 싶은 옷을 검색해보세요."
      />
      <button className={styles.searchButton}>검색</button>
    </form>
  );
}
