// Imports
// import mainLogo from '../../images/Logo-White.png';

// Components
// import NavBar from '../Navbar/Navbar';

// Styles
// import './Header.css';

export default function Header() {
  return (
    <header className='p-4'>
      <div>
        <h1 className='text-5xl font-bold tracking-tight text-pink-700 max-w-s'>
          Bruno Larraín Escuti
        </h1>
        <h2 className='font-medium text-xl tracking-tight text-neutral-200'>
          Full MERN Stack Web Developer
        </h2>
        <p className='text-lg max-w-xs'>
          I strive to build big and bold digital experiences online
        </p>
        <nav className='nav hidden lg:block'>
          <ul>
            <li>About</li>
            <li>Professional Experience</li>
            <li>Projects</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
