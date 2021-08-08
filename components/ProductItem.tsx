import { memo, useState /* lazy */ } from "react";
// import { AddProductToWhishList } from "./AddProductToWishList";
import { AddProductToWhishListProps } from "./AddProductToWishList";
import dynamic from "next/dynamic";
import lodash from "lodash";

const AddProductToWhishList = dynamic<AddProductToWhishListProps>(
  () => {
    return import("./AddProductToWishList").then(
      (mod) => mod.AddProductToWhishList
    );
  },
  {
    // eslint-disable-next-line react/display-name
    loading: () => <span>Carregando...</span>,
  }
);

interface IProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: IProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishList && (
        <AddProductToWhishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
  }
);
