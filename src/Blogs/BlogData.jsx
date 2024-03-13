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
    
    let [bookMark,setBookMark] = useState([])
    let hendelBookMarkButton = (bM) => {
        let bookM = [...bookMark,bM]
        setBookMark(bookM)
    }

    return (
        <div className="md:w-[70%]">
           {
                blog.map((blog,index) => <Blogs
                 key={index}
                 blog={blog}
                 hendelBookMarkButton ={hendelBookMarkButton}
                  ></Blogs>)
            }
            <BookMark bookMark ={bookMark}></BookMark>
        </div>
    );
};

export default BlogData;