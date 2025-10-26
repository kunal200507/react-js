import { useState } from "react"
import { NavLink } from "react-router"
import userdb from "../appwrite/appwriteDb"
function Postcard({
    tittle,
    description,
    src,
    slug,
    userId
}) {

    async function deletePost(){
        try {
            await userdb.deletePost(slug,userId)
        } catch (error) {
            alert("error please try again")
            console.log(error)
        }
    }

    const [cardActivity, setCardActivity] = useState(false)

    return (
        <>
            <div
                className="border border-gray-200 w-1/6 rounded-xl p-5 hover:shadow-lg transition bg-white relative"
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
                <div className="flex flex-row justify-between items-center" >
                    <button
                        className="text-blue-600 hover:underline font-medium cursor-pointer"
                    >
                        Read More →
                    </button>
                    <button
                        className="w-10 h-10 rounded-full border border-gray-100 cursor-pointer"
                        onClick={() => setCardActivity(!cardActivity)}
                    >
                        :
                    </button>
                </div>
                {cardActivity &&
                    (
                        <ul className="border-2 border-gray-200 bg-white absolute z-5 w-1/2 h-1/4 -right-20 flex flex-col rounded-2xl justify-around items-center top-100% text-blue-600 font-medium">
                            <li className="hover:underline cursor-pointer">
                                <NavLink to="/update">
                                    update Post
                                </NavLink>
                            </li>
                            <li className="hover:underline cursor-pointer">
                                <button onClick={deletePost()}>
                                    delete Post
                                </button>
                            </li>
                        </ul>
                    )
                }
            </div>

        </>
    )
}

export default Postcard