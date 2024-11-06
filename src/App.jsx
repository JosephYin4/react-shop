import React, { usestate } from 'react';
import './styles.css';
import ProductCard from './ProductCard';
import Shout from './Shout';
{/*import SumOfTwo from './SumOfTwo';*/ }



function App() {


  const [isNavbarShowing, setNavbarShowing] = usestate(false);

  // Toggle the collapse state
  const toggleNavbar = () => {
    setNavbarShowing(!isNavbarShowing);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>
      <main>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                <div className="card h-100">
                  {/* Product Cards Here */}
                  <div className="col-md-3 mb-4">
                    <ProductCard
                      imageUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      productName="Fancy Product"
                      price="$40.00 - $80.00"
                    />
                  </div>
                  <div className="col-md-3 mb-4">
                    <ProductCard
                      imageUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      productName="Fancy Product"
                      price="$40.00 - $80.00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
      </footer>

      <div>
        <h1>React Shout Component Example</h1>
        Passing the message prop to Shout
        <Shout msg="Hello, how are you?" />
        <Shout msg="this is a test" />
      </div>
      {/*<div>
        <h1>Sum of Two Numbers</h1>
        Passing the two numbers as props to SumOfTwo
        <SumOfTwo num1={5} num2={7} />
        <SumOfTwo num1={10} num2={20} />
      </div> */}

    </>
  )
}

export default App;
