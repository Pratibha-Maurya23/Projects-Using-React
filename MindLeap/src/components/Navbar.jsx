import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "motion/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleCloseMenu = () => {
    setIsOpen(false);
  }

  const handleScroll = () => {
    // Only update active section if not manually scrolling
    if (isScrolling) return;
    
    const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isScrolling]); // Add isScrolling as dependency

  const handleScrollTo = (targetId) => {
    setIsScrolling(true);
    setActiveSection(targetId);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      
      // Reset scrolling state after scroll completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 800); // Match this timeout to your scroll duration
    }
  }

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 md:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a 
        whileHover={{scale:1.1}}
        whileTop={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('home');
          }}
          href="#home"
          className={`text-white ${activeSection === 'home' ? 'isActive font-bold' : ''}`}
        >Home</motion.a>
      </li>
      <li>
        <motion.a href="#services"
          whileHover={{scale:1.1}}
          whileTop={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('services');
          }}
          className={`text-white ${activeSection === 'services' ? 'isActive font-bold' : ''}`}
        >Services</motion.a>
      </li>
      <li>
        <motion.a href="#about"
            whileHover={{scale:1.1}}
           whileTop={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('about');
          }}
          className={`text-white ${activeSection === 'about' ? 'isActive font-bold' : ''}`}
        >About Us</motion.a>
      </li>
      <li>
        <motion.a href="#pricing"
            whileHover={{scale:1.1}}
        whileTop={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('pricing');
          }}
          className={`text-white ${activeSection === 'pricing' ? 'isActive font-bold' : ''}`}
        >Pricing</motion.a>
      </li>
      <li>
        <motion.a href="#testimonial"
            whileHover={{scale:1.1}}
        whileTop={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('testimonial');
          }}
          className={`text-white ${activeSection === 'testimonial' ? 'isActive font-bold' : ''}`}
        >Testimonial</motion.a>
      </li>
    </ul>
  )

  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
      <div className='container mx-auto flex justify-between items-center h-full'>
        {/* logo */}
        <div>
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        {/* navitems */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>
            {navLinks}
          </nav>
        </div>

        {/* buttons */}
        <div className="hidden md:block">
          <a 
          onClick={e =>{
            e.preventDefault(),
            handleScrollTo('contact')
          }}
          href="#contact" className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded">
            Contact Us
          </a>
        </div>
        {/* hamburger menu */}
        <div className="block md:hidden" >
          <button
            onClick={handleToggle}
            className={`text-white foucu:outline-none ${isOpen ? "border border-white" : ""}`}>
            <HiOutlineMenuAlt3 className="size-6" />
          </button>
        </div>
      </div>

      {/* mobile nav items */}
      {
        isOpen && (
          <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
            <ul className="flex flex-col p-4 space-y-3">
              {navLinks.props.children}
              <li className="py-3 ">
                <a href="#contact"
                  className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('contact');
                  }}
                > Contact Us</a>
              </li>
            </ul>
          </nav>
        )
      }
    </header>
  )
}

export default Navbar;