import logo from "../../../../public/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <div
            className="max-w-7xl mx-auto">
            <div
                className="grid grid-cols-12">
                {/* this is navbar routes start */}
                <div
                    className="col-span-8">
                    <div
                        className="flex items-center font-bold">
                        <img
                            className="w-[138px]"
                            src={logo}
                            alt="" />
                        <p
                            className="mx-5 flex items-center">
                            Solutions <IoIosArrowDown className="ms-2 text-blue-600 font-extrabold" />
                        </p>
                        <p
                            className="mx-5 flex items-center">
                            Features <IoIosArrowDown className="ms-2 text-blue-600 font-extrabold" />
                        </p>
                        <p
                            className="mx-5 flex items-center">
                            Blogs <IoIosArrowDown className="ms-2 text-blue-600 font-extrabold" />
                        </p>
                        <p
                            className="mx-5 flex items-center">
                            About <IoIosArrowDown className="ms-2 text-blue-600 font-extrabold" />
                        </p>
                    </div>
                </div>
                {/* this is navbar routes end */}

                {/* login register btn start */}
                <div
                    className="col-span-4 flex items-center justify-end">
                    <p
                        className="text-[#0076CE] font-bold rounded-lg border-2 border-blue-500 px-5 py-2 mr-4">
                        Login
                    </p>
                    <p
                        className="bg-[#0076CE] font-semibold text-white px-4 py-2 rounded-lg">
                        Register
                    </p>
                </div>
                {/* login register btn end */}
            </div>
        </div>
    );
};

export default Navbar;