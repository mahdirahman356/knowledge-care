import PropTypes from 'prop-types'; 
import { FaRegBookmark } from "react-icons/fa";

const Blogs = ({blog,hendelBookMarkButton}) => {
    let {cover_image,title,author_name,author_profile_image,post_date,hashtags,mark_as_read_text,read_time} = blog
    return (
        <div className="md:px-7 space-y-5 mb-12">
             {/* img */}
            <img src={cover_image} alt="" />

            {/* author fild */}
           <div className="flex justify-between items-center">
           <div className="flex items-center gap-4 ">
              <div>
                <img src={author_profile_image} alt="" />
              </div>
              <div>
                 <p className="text-[18px] font-bold">{author_name}</p>
                 <p className="text-[15px] text-[#11111199] font-bold">{post_date}</p>
              </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <p className="font-[400">{read_time} min read </p>
                <button onClick={() => hendelBookMarkButton(title)}><FaRegBookmark /></button>
              </div> 
           </div>
            
            {/* title */}
            <h1 className="text-3xl font-bold text-gray-700">{title}</h1>

            {/* hashtags */}
            <div className="flex gap-4">
            {
                hashtags.map((hash,index)=> <p className="text-[#11111199] font-[400]" key={index}>#{hash}</p>)
            }
            </div>

        {/* mark as red */}
            <p className="text-[#6047EC] font-semibold underline">{mark_as_read_text}</p>
        </div>
    );
};

Blogs.propTypes = {
    blog: PropTypes.object.isRequired,
    hendelBookMarkButton:PropTypes.func.isRequired
  }
  
export default Blogs;