import { CartState } from "../context/Context";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return <div>home</div>;
};

export default Home;
