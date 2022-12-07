import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // Rota dinamica
  const { id } = useParams();

  // Carregamento dado individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);
  return (
    <>
      <p> ID do produto: {id} </p>

      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>

          {/* Nested  routes */}
          <Link to={`/products/${product.id}/info`}>
          Mais Informações
          </Link>
        </div>
      )}
    </>
  );
};

export default Product;
