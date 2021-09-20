import { createContext, useContext, useEffect, useState } from "react";

import { formatPrice } from "../utils/format";
import { api } from "../services/api";

const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("products");
      const data = response.data.map((product) => ({
        ...product,
        fullPriceFormatted: formatPrice(product.fullPrice),
        priceFormatted: formatPrice(product.price),
      }));

      console.log(data);
      setProducts(data);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    async function loadSizes() {
      const response = await api.get("sizes");
      const data = response.data;

      console.log(data);
      setSizes(data);
    }

    loadSizes();
  }, []);

  return (
    <ProductContext.Provider value={{ products, sizes }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  return context;
}
