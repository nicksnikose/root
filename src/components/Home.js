import { Link } from 'react-router-dom';
import Navbar from './Navbar';


export default function Home(){
    return(
        <>
    
        < Navbar />
        <div className='h'>
        <div className='text_main'>
        <h1>Home Page</h1>
        <p className='para'> This is the Home Page of My awesome App</p>
        <p className='para'>React Router is the most popular solution. Add React Router. To add React Router in your application.</p>
        <Link to="/about" className='link'>Go To About Page</Link> <br />
        </div>
        </div>
        </>
    );
}