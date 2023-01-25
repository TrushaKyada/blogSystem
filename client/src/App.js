import Home from './component/home';
import Bloguser from './component/blog-user';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './component/about';
import Contact from './component/contact';
import Registration from './component/registration-form';
import Login from './component/login';
import Blog from './component/blog';
import Addblog from './component/addblog';
import Explore from './component/explore';
import Travel from './component/travel';
import Lifestyle from './component/lifestyle';
import Experience from './component/experience';
import Food from './component/food';
// import BlogDetail from './component/blogDetail';
function App() {
  var token=localStorage.getItem('token');
  console.log("token",token);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog/:id' element={<Bloguser></Bloguser>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/registration' element={<Registration></Registration>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path='/blogPost/:id' element={<Blog></Blog>}></Route>
      <Route path='/addblog/:id' element={<Addblog></Addblog>}></Route>
      <Route path='/TRAVEL' element={<Travel></Travel>}></Route>
      <Route path='/FOOD' element={<Food></Food>}></Route>
      <Route path='/EXPLORE' element={<Explore></Explore>}></Route>
      <Route path='/lIFESTYLE' element={<Lifestyle></Lifestyle>}></Route>
      <Route path='/EXPERIENCE' element={<Experience></Experience>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
