import './App.css';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';


import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import AdminDashboard from './views/AdminDashboard';




function App() {

  return (
   <Router>
    <div className="App">
      
           <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <div class="container-fluid">
            <a class="navbar-brand" href="/" >Cart Youcode</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
           <div class="navbar-nav">
           <a class="nav-link active" aria-current="page" href="/"><Link to="/Home" class="text-dark" >profile</Link></a>
          <a class="nav-link" href="/" ><Link to="/" class="text-dark" >Register</Link></a>
         <a class="nav-link" href="/"><Link to="/Login" class="text-dark" >Login</Link></a>
         <a class="nav-link " href="/" ><Link to="/AdminDashboard" class="text-dark">Dashboard</Link></a>
        </div>
       </div>
       </div>
      </nav>
      </div>
        <Switch>
        <Route path='/AdminDashboard'  component={AdminDashboard} />
        <Route path='/Home' component={Home} /> 
        <Route path='/Login' component={Login} /> 
        <Route path='/'  component={Register} />
        
        </Switch>
        </div>
       </Router>

  );
}

export default App;
