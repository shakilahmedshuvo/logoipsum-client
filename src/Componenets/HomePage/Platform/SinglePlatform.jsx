const SinglePlatform = ({ data }) => {
    const { name, des, icon } = data;
    // console.log(data);
    return (
        <div
            className="grid grid-cols-3 my-2 mt-6">
            <div
                className="flex items-center justify-start pb-4">
                <img
                    src={icon}
                    alt="" />
            </div>
            <div
                className="col-span-2 text-lg">
                <span
                    className="text-xl font-extrabold">{name}</span> {des}
            </div>
        </div>
    );
};

export default SinglePlatform;