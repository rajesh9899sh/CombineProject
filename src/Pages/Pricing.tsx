import Navbar from "../components/productsThunk/Navbar";
import Products from "../components/productsThunk/Products";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div>
        <h3 className="heading">Welcome to the redux toolkit store</h3>
        <section>
          <h3>Products</h3>
          <Products />
        </section>
      </div>
    </>
  );
};

export default Pricing;
