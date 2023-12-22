import { Routes, Route, Link, BrowserRouter } from 'react-router';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Products from './components/Products';
function App() {
  

  return (
    <>
     <BrowserRouter>
     <header className="header-container">
        <nav className='navbar-container'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/products'>Products</Link>
              </li>
              <li>
                <Link to='/cart'>Cart</Link>
              </li>
            </ul>
        </nav>
      </header>
      <main className="main-container">
        <div className="hero-container">
          <div className="title-container">

          </div>
          <div className="picture-container">

          </div>
        </div>
        <div className="card-container">
          
        </div>
      </main>
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/about' element = { <About />} />
        <Route path='/products' element = { <Products />} />
        <Route path='/cart' element = { <Cart />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
