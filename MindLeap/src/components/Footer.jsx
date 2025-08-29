import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaMapMarkedAlt, FaMapMarker, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import footerLogo from '../assets/footer-logo.svg'

const Footer = () => {
  return (
    <div className='py-12 bg-gray-100 px-8'>
      <div className='conatiner mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
        <div className='space-y-6 mr-14'>
          <div className='flext items-center space-x-2'>
            <img src={footerLogo} alt="" className='w-32 h-auto'/>
          </div>
          <p className='text-s text-para mt-2 mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusantium nulla mollitia ratione iste vero error repellendus iusto dolor totam!</p>
          <div className='flex space-x-4'>
            <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaFacebook  className='text-xl'/>
            </a>
            <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaTwitter  className='text-xl'/>
            </a>
            <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaInstagram  className='text-xl'/>
            </a>
            <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaLinkedinIn className='text-xl'/>
            </a>
          </div>
        </div>


        <div className='space-y-6' >
          <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-3'>
            <li>
              <a href="#home" className='hover:underline text-gray-700'>Home</a>              
            </li>
            <li><a href="#about" className='hover:underline text-gray-700'>About Us</a></li>
            <li><a href="#services" className='hover:underline text-gray-700'>Services</a></li>
            <li><a href="#contact" className='hover:underline text-gray-700'>Conatct Us</a></li>
          </ul>
        </div>

        <div className='space-y-6' >
          <h3 className='text-xl font-semibold mb-4'>Supports</h3>
          <ul className='space-y-3'>
            <li>
              <a href="#" className='hover:underline text-gray-700'>FAQ</a>              
            </li>
            <li><a href="#" className='hover:underline text-gray-700'>Terms of services</a></li>
            <li><a href="#" className='hover:underline text-gray-700'>Privacy Policy</a></li>
            <li><a href="#" className='hover:underline text-gray-700'>Support Center</a></li>
          </ul>
        </div>

        <div className='space-y-6' >
          <h3 className='text-xl font-semibold mb-4'>Contact info</h3>
          <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
             < FaMapMarker className='text-primary'/>  
             <p className='text-gray-700'>123 Street, City, Country</p>       
            </li>
            <li className='flex items-center gap-2'>
             < FaPhoneAlt className='text-primary'/>  
             <p className='text-gray-700'>+123 456 7890</p>       
            </li>
            <li className='flex items-center gap-2'>
             < FaEnvelope className='text-primary'/>  
             <p className='text-gray-700'>info@mindleap.com</p>       
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
