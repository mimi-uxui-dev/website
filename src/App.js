import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './compo/Header'
import ContactSection from './compo/ContactSection'
import Footer from './compo/Footer'
import Home from './compo/Home'
import About from './compo/About'
import Freebies from './compo/Freebies'
import Work from './compo/Work'



function App() {




  return (
    <div className="App">
      <div className="cursor"></div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/freebies' component={Freebies} />
          <Route path='/work' component={Work} />
        </Switch>
      </Router>

      <ContactSection />
      <Footer />

    </div>
  );
}

export default App;