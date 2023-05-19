
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';

function App() {
  return (
      <BrowserRouter>
    <div>
      <NavBar/>
      <div>
        
      </div>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element= {<AboutPage/>}/>
      <Route path='/articles' element={<ArticleListPage/>}/>
      <Route path='/articles/:articleId' element={<ArticlePage/>}/>
        
      </Routes>
     </div>
      </BrowserRouter>


  );
}

export default App;



