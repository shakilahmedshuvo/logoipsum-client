import { FaStar } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

const LeftSection = ({ data }) => {
    const { name, intro, rating, reviewCount, taskComplexity, price, deliveryTime, testimonial } = data;

    return (
        <div className="ms-4 lg:ms-0">

            <div>
                <h2
                    className="text-4xl font-extrabold">
                    {name}
                </h2>
                <p
                    className="text-base lg:text-xl font-thin mt-4 text-gray-700 pe-2">
                    {intro}
                </p>

                <p
                    className="text-xl flex items-center font-bold text-[#0076CE] pt-8 pb-6">
                    <FaStar className="mr-2" /> {rating}<span
                        className="font-thin text-gray-600">({reviewCount})</span>
                </p>

                <div
                    className="bg-gray-50 px-8 py-4 rounded-2xl shadow-md mx-1">
                    <div
                        className="flex items-center justify-between pt-2 pb-4">
                        <p
                            className="text-xl font-thin text-gray-700">
                            {taskComplexity}
                        </p>
                        <p
                            className="text-2xl font-extrabold">
                            {price}
                        </p>
                    </div>

                    <div>
                        <p
                            className="text-lg flex items-center pb-3 px-2">
                            <BsCalendar3 className="mr-3 text-[#0076CE]" />{deliveryTime}
                        </p>
                        <div
                            className="grid grid-cols-2 my-4">
                            <div
                                className="bg-[#0076CE] text-white rounded-xl font-semibold py-3 flex items-center justify-center mr-3">
                                Request Proposal
                            </div>
                            <div
                                className="bg-white text-[#0076CE] font-semibold border-2 border-[#0076CE] rounded-xl ms-3 flex items-center justify-center">
                                Chat with me
                            </div>
                        </div>
                    </div>

                </div>
                {/* review section start */}
                <div
                    className="bg-gray-50 px-8 py-4 rounded-2xl shadow-md mx-1 mt-8 mb-5">
                    <h2 className="text-4xl font-extrabold mt-8">
                        What people say?
                    </h2>
                    <p
                        className="mt-4 font-thin pb-4 text-gray-700">
                        {testimonial?.text}
                    </p>
                </div>
                {/* review section end */}

            </div>

        </div>
    );
};

export default LeftSection;