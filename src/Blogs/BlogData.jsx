import { useEffect } from "react";
import { useState } from "react";
import Blogs from "./Blogs";
import BookMark from "../BookMark/BookMark";

const BlogData = () => {
    
    let [blog,setBolg] = useState([])

    useEffect(()=>{
     fetch('blog.json')
     .then(res => res.json())
     .then(data => setBolg(data))
    },[]) 
         
    let [bookMark, setBookMark] = useState([]);
    let hendelBookMarkButton = (bM) => {
        let bookM = [...bookMark, bM]
    setBookMark(bookM);
};

   let [time,setTime] = useState(0)
    let hendelSpentTime = (timeSet,id) => {
        let totalTime = time + timeSet
        setTime(totalTime)
        let removeBM = bookMark.filter(bookMark =>  bookMark.id !== id)
        setBookMark(removeBM)
    }
       
    return (
        <div className="md:flex">
           <div>
           {
                blog.map((blog,index) => <Blogs
                 key={index}
                 blog={blog}
                 hendelBookMarkButton ={hendelBookMarkButton}
                 hendelSpentTime ={hendelSpentTime}
                  ></Blogs>)
            }
           </div>
            
           <BookMark bookMark ={bookMark} time={time}></BookMark>
            
        </div>
    );
};

export default BlogData;