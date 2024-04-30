
import './App.css';
import MyBookings from './pages/MyBookings/MyBookings';
import FindDoctors from './pages/FindDoctors/FindDoctors';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
          
        </Route>
        <Route path="/MyBookings">
          <MyBookings/>
        </Route>
        <Route path="/FindDoctors">
          <FindDoctors/>
        </Route>
      </Switch>
    </Router>
    
      
  );
}

export default App;
