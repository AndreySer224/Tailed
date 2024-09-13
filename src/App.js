import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import NoFounder from './pages/NoFounder';
import {Cats, CatsMain, Bambino, Burmilla, Nibelung} from './pages/Cats';

 
function Nav(props){
  const {paths} = props;
  return(
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
       <div class="container-fluid">
       <>
       <img src="https://papik.pro/uploads/posts/2021-12/1640231306_15-papik-pro-p-kotenok-konturnii-risunok-15.jpg" alt="Avatar Logo" style={{width: '30px'}} className="rounded-pill"/>
       </>
       </div>
      <Link className='navbar-brand' to='/'>Fluffy</Link>
          <ul className='navbar-nav'>
        {
          paths.map((link, i)=><li className='nav-item' key={i}>
            <Link to={link.path} className='nav-link'>{link.value}</Link>
          </li>)
        }
      </ul>
    </nav>
  )
}
function App() {
  const paths=[
    {
      path: '/',
      value: 'Home'
    },
    {
      path: 'about',
      value: 'About'
    },
    {
      path: 'cats',
      value: 'Cats'
    }
  ]
  return (
    <div className="App">
      <Nav paths={paths}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='cats' element={<Cats/>}>     
                      <Route index element={<CatsMain/>}/>
                      <Route path='burmilla' element ={<Burmilla/>}/>
                      <Route path='bambino' element ={<Bambino/>}/>
                      <Route path='nibelung' element ={<Nibelung/>}/>
      </Route>                
      <Route path='*' element={<NoFounder/>}/>      
     </Routes>
    </div>
  );
}

export default App;
