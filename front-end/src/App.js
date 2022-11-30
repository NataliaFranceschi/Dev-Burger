import './App.css';
import { Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login'
import Home from './pages/Home'
import Order from './pages/Order'
import Products from './pages/Products'
import Employee from './pages/Employee'
import Revenue from './pages/Revenue'

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/order" component={ Order } />
        <Route exact path="/product" component={ Products } />
        <Route exact path="/employee" component={ Employee } />
        <Route exact path="/revenue" component={ Revenue } />
      </Switch>
    </Provider>
  );
}

export default App;
