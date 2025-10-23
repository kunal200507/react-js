import { Link } from "react-router"
function Postcard() {
    return (
        <>
            <div
                className="border border-gray-200 w-1/6 rounded-xl p-5 hover:shadow-lg transition bg-white"
            >
                <img
                    // src={`https://source.unsplash.com/random/400x250?sig=&blog`}
                    // alt="Blog"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-lg font-semibold mb-2">
                    Blog Title
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                    A short description or excerpt from the blog goes here to attract readers.
                </p>
                <Link
                    className="text-blue-600 hover:underline font-medium"
                >
                    Read More →
                </Link>
            </div>
        </>
    )
}

export default Postcard