export interface AddProductToWhishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWhishList({
  onAddToWishList,
  onRequestClose,
}: AddProductToWhishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
