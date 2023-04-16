import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png'
import './navigation.scss'

const Navigation = () => {
    return(
        <div className='header'>
            <div className="navigation">
                <div className='navigation-left'>
                    <div>
                        <Link className='logo-container' to='/'>
                            <Logo className='logo' />
                       </Link>
                    </div>
                        <div className="nav-links-container">
                        <Link className='nav-link' to='/collections'>Collections</Link>
                        <Link className='nav-link' to='/men'>Men</Link>
                        <Link className='nav-link' to='/women'>Women</Link>
                        <Link className='nav-link' to='/about'>About</Link>
                        <Link className='nav-link' to='/contact'>Contact</Link>
                    </div>
                </div>
                <div className='navigation-right'>
                    <div className='cart-icon-container'>
                    <CartIcon className='cart-icon' />
                    </div>
                    <div className='avatar-container'>
                    <img src={avatar} alt="avatar" className='avatar-img' />
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Navigation;