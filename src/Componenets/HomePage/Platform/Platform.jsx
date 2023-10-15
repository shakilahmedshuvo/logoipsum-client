import maleImg from "../../../assets/malePhoto.png";
import feamleImg from "../../../assets/malePhoto.png";
import search from "../../../assets/search.svg";
import contact from "../../../assets/contact.svg";
import academy from "../../../assets/academy.svg";
import research from "../../../assets/research.svg";

const Platform = () => {
    return (
        <div
            className="mt-20 max-w-7xl mx-auto">
            <div
                className="grid grid-cols-2">

                {/* right side div start */}
                <div>
                    <h2
                        className="text-6xl font-extrabold">
                        <span className="platform">All-in-One </span>platform
                        <br />
                        That Makes Easier
                    </h2>
                    <p
                        className="mt-5 text-[24px] font-light text-gray-700">
                        We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals
                    </p>

                    {/* icons section start */}
                    <div
                        className="grid grid-cols-2">

                    </div>
                    {/* icons section end */}

                </div>
                {/* right side div end */}

                {/* left side div start */}
                <div>

                </div>
                {/* left side div end */}

            </div>
        </div>
    );
};

export default Platform;