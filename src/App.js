import Header from './components/Header/Header.jsx'
import './App.css';
import SidebarMenu from './components/SidebarMenu/SidebarMenu.jsx';
import Home from './pages/home/Home.jsx';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Post from './pages/Post/Post.jsx';
import Map from './pages/Map/Map.jsx';

function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <SidebarMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/map">
          <Map />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
