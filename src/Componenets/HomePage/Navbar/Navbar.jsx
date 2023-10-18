import logo from "../../../assets/logo.png";
import FooterLogo from "../../../assets/FooterLogo.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>

            {/* lg device start */}
            <div
                className="max-w-7xl mx-auto hidden lg:block">
                <div
                    className="grid grid-cols-12">
                    {/* this is navbar routes start */}
                    <div
                        className="col-span-8">
                        <div
                            className="flex items-center font-bold">
                            <Link
                                className="/">
                                <img
                                    className="w-[138px]"
                                    src={logo}
                                    alt="" />
                            </Link>
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
            {/* lg device end */}


            {/* sm device start */}

            <div
                className="lg:hidden block">
                <div
                    className="cursor-pointer grid grid-cols-12 items-center">
                    <div
                        onClick={toggleMenu}
                        className="col-span-2 flex items-starts justify-center">
                        <HiMenuAlt2 className="w-9 h-9 text-black ms-1" />
                    </div>
                    <Link
                        to={"/"}
                        className="col-span-8 flex items-center justify-center">
                        <img
                            className="w-[140px]"
                            src={logo}
                            alt="" />
                    </Link>
                    <div className="col-span-2 mr-1">
                        <p
                            className="text-[#0076CE] font-bold rounded-lg border-2 border-blue-500 py-2 w-full text-center text-xs">
                            Login
                        </p>
                    </div>
                    <div
                        className={
                            menuOpen ?
                                "fixed top-0 left-0 w-[75%] sm:hidden h-screen p-10 ease-in-out duration-500 footerBg"
                                :
                                "fixed left-[-100%] top-0 p-10 sm:hidden h-screen ease-in-out duration-500 footerBg"
                        }>
                        {/* cross sine */}
                        <div
                            className="flex w-full items-center justify-between">
                            <div>
                                <Link className="/">
                                    <img
                                        className="w-[138px]"
                                        src={FooterLogo}
                                        alt="" />
                                </Link>
                            </div>
                            <div
                                onClick={toggleMenu}
                                className="cursor-pointer">
                                <IoMdCloseCircleOutline className="h-6 w-6 text-white" />
                            </div>
                        </div>

                        {/* mobile device menu */}
                        <div
                            className="flex-col py-3 font-medium text-white mt-4">
                            <ul>
                                <li
                                    className="py-3 hover:underline">
                                    <Link
                                        href="/">
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <Link
                                        href="">
                                        Solutions
                                    </Link>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <Link
                                        href="/hrjobs">
                                        Features
                                    </Link>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <Link
                                        href="/seekers">
                                        Blogs
                                    </Link>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <Link
                                        href="/blogs">
                                        About
                                    </Link>
                                </li>

                                <div className="mt-6 grid grid-rows-2 gap-4">
                                    <p
                                        className="border-2 border-white rounded-md text-center font-medium py-2 text-sm">
                                        Login
                                    </p>
                                    <p
                                        className="border-2 border-white rounded-md text-center font-medium py-2 text-sm bg-white text-black">
                                        Register
                                    </p>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* sm device end */}

        </>
    );
};

export default Navbar;