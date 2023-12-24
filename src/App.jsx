import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './components/home';
import { GoSun } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import Singin from './components/singIn';
import CreateAcc from './components/About/createAccaunt';
function App() {


  return (
    <div className='container'>
      <BrowserRouter>
        <header className="header-container">
          <div className="Login">
            <ul>
              <li>
              <Link to='/login'>Sign in / Guest</Link>
              </li>
              <li>
                <Link to='/singin'>Create Accaunt</Link>
              </li>
            </ul>
          </div>
          <nav className='navbar-container'>
            <span>C</span>
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
            <div className="icon-container">
              <GoSun className='icon' />
              <MdOutlineShoppingCart className='icon' />
            </div>
          </nav>
        </header>
        {/* <main className="main-container">
          <div className="hero-container">
            <div className="title-container">

            </div>
            <div className="picture-container">

            </div>
          </div>
          <div className="card-container"> */}

          {/* </div>
        </main> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Singin />}/>
          <Route path='/singin' element={<CreateAcc />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
