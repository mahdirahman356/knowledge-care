
import './App.css'
import BlogData from './Blogs/BlogData'
import Header from './Header/Header'

function App() {

  return (
    <>
     <Header></Header>
     <div className="md:flex w-[95%] md:w-[80%] mx-auto mt-14">
     <BlogData></BlogData>
     {/* <BookMark></BookMark> */}
     </div>
    </>
  )
}

export default App
