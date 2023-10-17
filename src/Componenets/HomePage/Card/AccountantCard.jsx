import { Link } from "react-router-dom";
import cardImg from "../../../assets/cardImg.png";
import { FaStar } from "react-icons/fa";

const AccountantCard = ({ data }) => {
    const { id, name, intro, rating } = data;

    return (
        <div
            className="flex items-center justify-center">
            <div
                className="border-t-4 border-t-blue-600 w-[85%] mt-10 bg-gray-50 shadow-md rounded-sm">
                <div
                    className="flex items-center justify-end mr-2 mt-2">
                    <p
                        className="bg-pink-500 w-fit text-white flex items-center px-5 py-1 rounded-full my-2 text-sm">
                        <FaStar className="text-white mr-1 text-sm" />   {rating}
                    </p>
                </div>
                <div
                    className="flex items-center justify-center">
                    <img
                        className="w-1/2 mt-1 pb-6"
                        src={cardImg}
                        alt="" />
                </div>
                <div>
                    <h2
                        className="text-center text-xl font-bold text-gray-600">
                        {name}
                    </h2>
                    <p
                        className="text-sm font-medium text-center py-2 text-gray-500 px-4">
                        {intro}
                    </p>
                    <div
                        className="flex items-center justify-center">
                        <Link
                            to={`/detailsPage/${id}`}
                            className="text-white footerBg w-fit font-semibold px-4 py-2 flex items-center justify-center rounded-md mt-3 mb-8">
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountantCard;