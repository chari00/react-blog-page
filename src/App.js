
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import PageNotFound from './pages/PageNotFound';
import LogInPage from './pages/LogInPage';
import CreateAcctPage from './pages/CreateAcctPage';

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
      <Route path='/login' element={<LogInPage/>}/>
      <Route path='/CreateAcct' element={<CreateAcctPage/>}/>


      {/*add route with path '*' to display page not found on all route except from the ones defined above.  */}
      <Route path='*' element={<PageNotFound/>}/>


        
      </Routes>
     </div>
      </BrowserRouter>


  );
}

export default App;



