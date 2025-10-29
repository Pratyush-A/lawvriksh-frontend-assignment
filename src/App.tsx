import Home from "./pages/homepage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar";


const App = () => {
  return (
    <Router>
      <div className='flex bg-[#ebdfd7] min-h-screen w-full'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/create' element={
            <div className='flex-1 flex items-center justify-center text-2xl sm:text-3xl px-4 pt-16 sm:pt-0'>
              Create Page
            </div>
          } />
           <Route path='/projects' element={
            <div className='flex-1 flex items-center justify-center text-2xl sm:text-3xl px-4 pt-16 sm:pt-0'>
              Projects Page
            </div>
          } />
           <Route path='/tasks' element={
            <div className='flex-1 flex items-center justify-center text-2xl sm:text-3xl px-4 pt-16 sm:pt-0'>
              Tasks Page
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App