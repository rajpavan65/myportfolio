import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Skills from './components/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Tools from './components/Tools'
import Project from './components/Project'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <>


      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/skills" component={Skills} />
            <Route path="/tools" component={Tools} />
            <Route path='/project' component={Project} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default App