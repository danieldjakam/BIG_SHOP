import './style/App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ProductscontextProvider from './Global/ProductsContext';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <ProductscontextProvider>
        <Router>
          <NavBar site_name = "BIG SHOP"/>
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </ProductscontextProvider>
    </div>
  );
}

export default App;
