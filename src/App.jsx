import './App.css'
import Foter from './component/Foter'
import Manager from './component/Manager'
import Navbar from './component/Navbar'


function App() {
 
  return (
    <>
    <Navbar/>
    <div className='text-center items-center p-12'>
    <div className="logo font-bold text-3xl text-white">Password Manager</div>
    <div className="hading  mt-2 text-white">your Own Password Manager  </div>
    </div>

    <Manager/>
 
<Foter/>

    </>
  )
}

export default App
