const SingleCard = ({ data }) => {
    const { num, name, des, date, feesOne, feesTwo } = data;

    return (
        <div
            className="mx-auto mt-6 w-full">
            <div
                className="num text-white px-3 py-3 font-bold w-fit relative right-3 top-11">
                {num}
            </div>
            <div
                className="bg-white shadow-xl rounded-2xl h-full">
                <h2
                    className="text-xl font-bold text-center pt-5">
                    {name}
                </h2>
                <p
                    className="font-extralight py-3 text-center w-[70%] mx-auto text-xs">
                    {des}
                </p>
                <div
                    className="bg-[#F4F4F4] grid grid-cols-5 mx-8 py-2 px-3 h-[39%] rounded-2xl">
                    <div
                        className="col-span-2">
                        <h2
                            className="text-blue-500 text-lg font-bold">
                            Due date
                        </h2>
                        <p
                            className="text-sm">
                            {date}
                        </p>
                    </div>
                    <div
                        className="col-span-3 ms-3">
                        <h2
                            className="text-[#F66] text-lg font-bold">
                            Penalty fees
                        </h2>
                        <p
                            className="text-sm">
                            {feesOne}
                        </p>
                        <p
                            className="text-sm">
                            {feesTwo}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;