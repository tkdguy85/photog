import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Gear from './components/Gear'
import BlogPost from './components/BlogPost'
import Blog from './components/Blog'
import About from './components/About'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ Gear } path='/gear' />
        <Route component={ BlogPost } path='/blog/:slug' />
        <Route component={ Blog } path='/blog' />
        <Route component={ About } path='/aboutme' />
      </Switch>
    </Router>    
  )
}

export default App;
