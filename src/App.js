import logo from "./logo.svg";
import "./App.css";
// import Login from "./code/customer/screens/Login";
import Navigation from "./code/route/Navigation";
import Home from "./code/customer/screens/home/Home";
import Header from "./code/customer/sharedComponents/header/Header";
import Product from "./code/customer/sharedComponents/product/Product";
import ReviewCard from "./code/customer/sharedComponents/reviewCard/ReviewCard";
import Store from "./code/customer/screens/store/Store";
import ProductDetail from "./code/customer/screens/product/Product";

function App() {
  return (
    <>
      <Header />

      <Home />
    </>
  );
}

export default App;
