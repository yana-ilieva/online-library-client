import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import Header from './components/Header';
import Footer from './components/Footer';
import AddUser from './components/AddUser';
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
              <Route exact path="/users/add" component={AddUser}></Route>
              <Route path="/users/add/:id" component={AddUser}></Route>
            </Switch>
          </div>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
