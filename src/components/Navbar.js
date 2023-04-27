import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export default function Navbar() {

  return (
    <>
        {/* < Welcome /> */}
      <div className='main'>
      <div>
          <Link to="/" ><Button variant="outline-primary">Home</Button></Link>
        </div>
        <div>
          <Link to="/About" ><Button variant="outline-success">About</Button></Link> <br></br>
        </div>
      </div>
      <img id='img' className="w-100 img-fluid" src={'https://images.unsplash.com/photo-1548983965-416c1920352e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZGluZyUyMHBhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'} />

     
    </>
  );
};