
const SingleRecommended = ({ data }) => {
    const { name, image, intro, rating, reviewCount, price } = data;

    return (
        <div
            className="mt-8 mx-4 bg-gray-50 shadow-xl">
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
                <div className="mt-5">
                    <p className="font-medium">{intro}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleRecommended;