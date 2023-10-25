import { Link } from "react-router-dom";

const Search = () => {

    return (
        <div>
            <input
                className="pl-4 pe-52 py-4 rounded-md me-1 mt-[60px] border-2"
                type="text"
                placeholder="Search by Name" />
            <Link
                to="/detailsPage">
                <button
                    className="bg-[#0076CE] text-white text-sm py-4 px-9 rounded-md">
                    Search
                </button>
            </Link>
        </div>
    );
};

export default Search;