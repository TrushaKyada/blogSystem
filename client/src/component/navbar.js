// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';    
// import Form from 'react-bootstrap/Form';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  // import {useParams} from "react-router-dom";
function NavScrollExample() {
  var token=localStorage.getItem('token');
  console.log("token",token);
  var id1 = localStorage.getItem("id");
  const userLogOut=async(e)=>
  {
    e.preventDefault()
    localStorage.removeItem("token")
    window.location="/"
  }
  const auth=async(e)=>{
    e.preventDefault()
    if(token){
      window.location=`/blogPost/${id1}`
    }
    else{
      window.location="/login"
    }
  }
  

  return (
 <>
       <Navbar className='lightpink' expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src='images/logo.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-dark font-size1">Home</Nav.Link>
            <Nav.Link href={`/blogPost/${id1}`} onClick={(e)=>auth(e)} className="text-dark font-size1">Blog Post</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/TRAVEL">TRAVEL</NavDropdown.Item>
              <NavDropdown.Item href="/FOOD">FOOD</NavDropdown.Item>
              <NavDropdown.Item href="/EXPLORE">EXPLORE</NavDropdown.Item>
              <NavDropdown.Item href="/LIFESTYLE">LIFESTYLE</NavDropdown.Item>
              <NavDropdown.Item href="/EXPERIENCE">EXPERIENCE</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" className="text-dark font-size1">About</Nav.Link>
            <Nav.Link href="/contact" className="text-dark font-size1">Contact</Nav.Link>
            
         {
            token ? <Nav.Link href="/log out" onClick={(e)=>userLogOut(e)} className="text-dark font-size1">log out</Nav.Link>:<Nav.Link href="/login" className="text-dark font-size1">Log in</Nav.Link>
            
         }
          </Nav>

          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-dark font-size1"><i class="fa-brands fa-facebook"></i></Nav.Link>
            <Nav.Link href="#action2" className="text-dark font-size1"><i class="fa-brands fa-twitter"></i></Nav.Link>
            <Nav.Link href="#action2" className="text-dark font-size1"><i class="fa-brands fa-linkedin"></i></Nav.Link>
            <Nav.Link href="#action2" className="text-dark font-size1"><i class="fa-brands fa-pinterest"></i></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </>
  );
}

export default NavScrollExample;