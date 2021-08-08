import React, { useMemo } from "react";

import { ProductItem } from "./ProductItem";

interface ISearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResult({ results }: ISearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
