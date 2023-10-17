import { FaStar } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

const LeftSection = ({ data }) => {
    const { name, intro, rating, reviewCount, taskComplexity, price, deliveryTime, testimonial } = data;

    return (
        <div>

            <div>
                <h2
                    className="text-4xl font-extrabold">
                    {name}
                </h2>
                <p
                    className="text-xl font-thin mt-4 text-gray-700 pe-2">
                    {intro}
                </p>

                <p
                    className="text-xl flex items-center font-bold text-blue-600 pt-8 pb-6">
                    <FaStar className="mr-2" /> {rating}<span
                        className="font-thin text-gray-600">({reviewCount})</span>
                </p>

                <div
                    className="bg-gray-50">
                    <div
                        className="flex items-center justify-between">
                        <p
                            className="text-lg font-thin text-gray-700">
                            {taskComplexity}
                        </p>
                        <p
                            className="text-2xl font-extrabold">
                            {price}
                        </p>
                    </div>

                    <div>
                        <p
                            className="text-lg flex items-center">
                            <BsCalendar3 className="mr-3 text-blue-600" />{deliveryTime}
                        </p>
                        <div
                            className="grid grid-cols-2">
                            <div>
                                Request Proposal
                            </div>
                            <div>
                                Chat with me
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LeftSection;