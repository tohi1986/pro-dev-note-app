import { useProducts } from "../features/products/hooks/useProducts"

export default function Products() {

  const {
    data: products,
    isLoading,
    error,
  } = useProducts()


  if (isLoading) {
    return <p>Loading...</p>
  }


  if (error) {
    return <p>Error</p>
  }


  return (
    <div>

      <h1>Products</h1>

      {products?.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price} €</p>
        </div>
      ))}

    </div>
  )
}