import { Product } from '../types/product';

interface Props {
  element: Product;
}

export default function ProductCard({ element }: Props) {
  const { price, saleRate, name } = element;
  return (
    <div className="flex w-6/12 flex-col items-center gap-6 rounded-md shadow-lg">
      <img className="aspect-square w-3/4" src="/public/bori-image.jpg" />
      <div className="flex w-full flex-col gap-6 p-5">
        <p className="text-lg font-semibold">{name}</p>
        <p className="flex justify-between text-sm">
          <strong className="font-bold">{saleRate}</strong>
          {price}
        </p>
      </div>
    </div>
  );
}
