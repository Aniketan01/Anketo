
import { Link } from "react-router-dom";
import burger from "../assets/burger.jpg"
import pasta from "../assets/pasta.jpg"
import pizza from "../assets/pizza.jpg"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Delicious Food, Delivered to You</h1>
          <p className="lead">Order your favorite meals with just a few clicks.</p>
          <Link to="/signup" className="btn btn-light btn-lg">Order Now</Link>
        </div>
      </section>

      {/* Featured Food Section */}
      <section className="container mt-5">
        <h2 className="text-center mb-4">Popular Dishes</h2>
        <div className="row">
          {foodItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">₹{item.price.toFixed(2)}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mt-5">
        <h2 className="text-center mb-4">Browse by Category</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card text-center p-3">
                <h5>{category.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Sample food items data
const foodItems = [
  { name: "Pizza", price: 200, image: pizza},
  { name: "Burger", price: 150, image: burger },
  { name: "Pasta", price: 250, image: pasta }
];

// Sample categories data
const categories = [
  { name: "Pizza" },
  { name: "Burgers" },
  { name: "Pasta" },
  { name: "Drinks" }
];

export default Home;