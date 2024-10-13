import ProductCard from '../components/ProductCard';

export default function CardRenderPage() {
  return (
    <>
      <ProductCard
        element={{
          id: 20,
          name: '사진',
          price: 2000,
          saleRate: 90,
          description: '사진이에용',
        }}
      />
    </>
  );
}
