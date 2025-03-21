import Navbar from './Navbar'
import Home from './Home';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetails';
import NotFound from './NotFound';
import Contact from './Contact';
import Request from './Request'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/create">
            <Create/>
          </Route>
          <Route exact path = "/contact">
            <Contact />
          </Route>
          <Route exact path = "/request">
            <Request/>
          </Route>
          <Route exact path = "/blogs/:id">
            <BlogDetail/>
          </Route>
          <Route path = "*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;