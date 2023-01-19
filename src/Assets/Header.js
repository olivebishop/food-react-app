import '../css/Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return (
        <>
        <div className='navbar text-decoration-none text-light bg-light shadow-lg mb-5 justify-content-aroundbnm start'>

            <Link to="/" className='nav-item active  text-decoration-none'>Home</Link>
            <Link to="/about" className='nav-item  text-decoration-none'>About</Link>
            <Link to="/Login" className='nav-item  text-decoration-none'>Login</Link>
            <Link to="/Register" className='nav-item  text-decoration-none'>Register</Link>
            
        </div>
        </> 
    ) 
}
export default Header;  