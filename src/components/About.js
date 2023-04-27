import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function About() {
    return (
        <>
            <div id='navbar'>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand to="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/" className='home'>Home</Link>
                            <Link to="/about" className='about'>About</Link>

                        </Nav>
                    </Container>
                </Navbar>
            </div>

            <div className='d'>
                <div>
                <img id='img2' className="img-fluid" src={'https://images.unsplash.com/photo-1625442772842-329d4f08ea14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmRpbmclMjBwYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'} />
                </div>
                <div className='about_text'>
                <h1>About Page</h1>
                <p className='para'> This is the About Page of My awesome App</p>
                <p className='para'>React Router is the most popular solution. Add React Router. To add React Router in your application.</p>
                <Link to="/" className='link'>Go To Home Page</Link><br /> <br />
            </div>
            </div>
            
            <div>
                <img id="img3" className="w-100 img-fluid" src={"https://images.unsplash.com/photo-1614034178871-d038bce3b763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"} />
            </div>
        </>
    );
}