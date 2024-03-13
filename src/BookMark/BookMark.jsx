
import PropTypes from 'prop-types'; 

const BookMark = ({bookMark}) => {
    console.log(bookMark)
    
       
    return (

         <div className="md:w-[30%] space-y-3">
            <div className="bg-[#6047EC1A] p-6 text-center rounded-xl border-[1px] border-[#6047EC99]">
                <h2 className="font-bold text-[20px] text-[#6047EC]">Spent time on read :</h2>
            </div>

           <div className="bg-[#1111110D] rounded-xl p-5">
              <h2 className="font-bold text-[20px] text-gray-800 ">Bookmarked Blogs : 8</h2>

           
              <div className=" bg-white p-5 rounded-xl mt-3">
                <h2 className="font-semibold text-gray-800"></h2>
              </div>
           </div>
        </div>
    );
};

BookMark.propTypes = {
    bookMark: PropTypes.array.isRequired,
  }
export default BookMark;