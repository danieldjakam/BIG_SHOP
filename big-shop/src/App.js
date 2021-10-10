import './style/App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ProductscontextProvider from './Global/ProductsContext';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <NavBar site_name = "BIG SHOP"/>
      <Banner/>
      <ProductscontextProvider>
        <div className="container">
          <Products/>
        </div>
      </ProductscontextProvider>
    </div>
  );
}

export default App;
