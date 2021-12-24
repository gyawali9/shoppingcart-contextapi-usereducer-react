import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  // console.log(products);
  return (
    <div className="home">
      {/* filter */}
      <Filters />
      <div className="productContainer">
        {/* {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))} */}
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
