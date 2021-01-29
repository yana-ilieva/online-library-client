import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateUser from './components/CreateUser';
import Starter from './components/Starter';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Starter}></Route>
              <Route exact path="/users" component={ListUsers}></Route>
              <Route path="/users/create" component={CreateUser}></Route>
            </Switch>
          </div>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
