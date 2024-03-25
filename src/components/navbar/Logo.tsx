import { Link } from 'react-router-dom';
import logo from '../../assets/logo_gris.svg';
export const Logo = () => {
  return (
    <div className='flex overflow-hidden w-1/2 sm:w-1/2 lg:w-1/4 sm:p-1'>
      <Link to={'/'}>
        <img src={logo} alt='logo' className='flex w-full object-cover' />
      </Link>
    </div>
  );
};
