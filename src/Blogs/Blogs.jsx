import PropTypes from 'prop-types'; 
import { FaBookmark } from "react-icons/fa";

const Blogs = ({blog,hendelBookMarkButton,hendelSpentTime}) => {
    let {id,cover_image,title,author_name,author_profile_image,post_date,hashtags,mark_as_read_text,read_time} = blog
   

    return (
        <div className="md:px-7 space-y-3 md:space-y-5 mb-12">
             {/* img */}
            <img src={cover_image} alt="" />

            {/* author fild */}
           <div className="flex justify-between items-center">
           <div className="flex items-center gap-1 md:gap-4 ">
              <div>
                <img className="w-[80%] md:w-full" src={author_profile_image} alt="" />
              </div>
              <div>
                 <p className="text-[12px] md:text-[18px] font-bold">{author_name}</p>
                 <p className="text-[10px] md:text-[15px] text-[#11111199] font-bold">{post_date}</p>
              </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <p className="font-[400] text-[12px] md:text-[18px]">{read_time} min read </p>
                <button className="text-[12px] md:text-[18px]" onClick={() => hendelBookMarkButton(blog)} ><FaBookmark /></button>
              </div>  
           </div>
            
            {/* title */}
            <h1 className="text-3xl font-bold text-gray-700">{title}</h1>

            {/* hashtags */}
            <div className="flex gap-4">
            {
                hashtags.map((hash,index)=> <p className="text-[#11111199] font-[400] text-[12px] md:text-[18px]" key={index}>#{hash}</p>)
            }
            </div>

        {/* mark as red */}
            <button className=" text-[#6047EC] font-semibold underline text-[12px] md:text-[18px]" onClick={()=>hendelSpentTime(read_time,id)}>{mark_as_read_text}</button>
        </div>
    );
};

Blogs.propTypes = {
    blog: PropTypes.object.isRequired,
    hendelBookMarkButton:PropTypes.func.isRequired,
    hendelSpentTime: PropTypes.func.isRequired,
    color: PropTypes.bool.isRequired
  }
  
export default Blogs;