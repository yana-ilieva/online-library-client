import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListUsers from "./components/ListUsers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddUser from "./components/AddUser";
import Starter from "./components/Starter";
import ViewUser from "./components/ViewUser";
import ListBooks from "./components/ListBooks";
import AddBook from "./components/AddBook";
import ViewBook from "./components/ViewBook";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Starter}></Route>
            <Route exact path="/users" component={ListUsers}></Route>
            <Route path="/users/add" component={AddUser}></Route>
            <Route path="/users/edit/:id" component={AddUser}></Route>
            <Route path="/users/view/:id" component={ViewUser}></Route>
            <Route exact path="/books" component={ListBooks}></Route>
            <Route path="/books/add" component={AddBook}></Route>
            <Route path="/books/edit/:id" component={AddBook}></Route>
            <Route path="/books/view/:id" component={ViewBook}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
