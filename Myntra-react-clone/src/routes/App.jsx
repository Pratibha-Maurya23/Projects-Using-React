import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from 'react-redux'
import '../App.css'
import FetchItems from '../components/Fetchitems'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import LoadingSpinner from '../components/LoadingSpinner'


function App() {
const fetchStatus=useSelector(store=>store.fetchStatus);

  return (
   <div>
    <Header/>
    <FetchItems/>
    {fetchStatus.curretlyFetching ? <LoadingSpinner/> : <Outlet/>}
   <Footer/>
   </div>
  )
}

export default App
