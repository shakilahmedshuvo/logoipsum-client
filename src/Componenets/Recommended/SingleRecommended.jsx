import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleRecommended = ({ data }) => {
    const { name, image, intro, rating, reviewCount, price } = data;

    return (
        <div
            className="mt-10 mx-4 bg-gray-50 shadow-xl h-full rounded-2xl">
            <div>
                <img
                    src={image}
                    alt="" />
            </div>
            <div
                className="mx-5">
                <div
                    className="flex items-center justify-between text-xl font-black mt-8">
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <div className="mt-3">
                    <p className="font-medium h-[65px]">{intro}</p>
                    <p className="text-[#0076CE] flex items-center mt-5 font-black text-lg">
                        <BsFillStarFill className="mr-2 text-2xl" /> {rating} <span className="text-black font-medium text-base">({reviewCount})</span>
                    </p>
                </div>
            </div>
            <p className="mt-6 mb-5 bg-[#0076CE] text-white 
            rounded-lg mx-4">
                <Link to={"/"} className="flex items-center justify-center py-3 w-full">
                    View services
                </Link>
            </p>
        </div>
    );
};

export default SingleRecommended;