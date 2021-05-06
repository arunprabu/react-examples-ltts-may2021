import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import { PageContext } from './PageContext';

function App() {

  const userStatus = {
    isLoggedIn: true,
    lastLogin: '3/May/2021'
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <div style={{marginTop: '80px'}}>
          <h1>React Hooks Project</h1>
          <Switch>
            <PageContext.Provider value={userStatus}>
              <Route path='/' component={Home} exact/>
              <Route path='/about' component={About}/>
            </PageContext.Provider>
            <Route path='/contact' component={Contact} />
            {/* URL Param is id */}
            <Route path='/contact/:id' component={Contact} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
