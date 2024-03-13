
import images from './images/profile.png'
const Header = () => {
    return (
        <div className="flex justify-between items-center pb-4 w-[95%] md:w-[80%] mx-auto mt-7 md:mt-14 border-b-[1px] border-[#11111126]">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700">Knowledge Cafe</h1>
            <img src={images} alt="" />
        </div>
    );
};

export default Header;