import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Navbar = () => {
    const linkClass = ({isActive}) => isActive
    ? 'p-2 rounded-lg duration-300 md:text-xl bg-slate-900 text-white'
    : 'p-2 rounded-lg hover:bg-slate-800 duration-300 md:text-xl text-white'
    return (
      <nav>
        <div className='flex bg-purple-500 text-white h-14 items-center md:h-20 w-full'>
          <div>
            <NavLink className="logos flex p-2 w-full gap-3 md:h-20 md:w-80 space-x-3 md:items-center">
              <img src={reactLogo} alt="React Logo" className='md:w-12 md:h-12' />
              <img src={viteLogo} alt="Vite Logo" className='md:w-12 md:h-12' />
            </NavLink>
          </div>
          <div className='flex justify-center items-center gap-5 w-full md:justify-end md:pr-12'>
            <NavLink to="/" className={linkClass}>
              <span>Home</span>
            </NavLink>
            <NavLink to="/tasks" className={linkClass}>
              <span>Tasks</span>
            </NavLink>
            <NavLink to="/weather" className={linkClass}>
              <span>Weather</span>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  