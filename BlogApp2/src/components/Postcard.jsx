import { NavLink } from "react-router"

function Postcard({
    tittle,
    description,
    src,
    slug,
}) {
    return (
        <div
            className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition bg-white relative"
        >
            <img
                src={src}
                alt="Blog-img"
                className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mb-2">
                {tittle}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
                {description}
            </p>
            <div className="flex flex-row justify-between items-center">
                <NavLink
                    to={`/post/${slug}`}
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                >
                    Read More →
                </NavLink>
            </div>
        </div>
    )
}

export default Postcard
