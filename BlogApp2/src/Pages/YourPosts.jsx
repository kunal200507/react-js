import { useEffect } from "react";
import userdb from "../appwrite/appwriteDb";
import { Postcard } from "../components/index.js";
import { useSelector } from "react-redux";

export default function YourPosts() {

    let postArr = [];

    const userdata = useSelector((state) => state.appwriteAuthstore.data)

    useEffect(() => {
        listPosts()
    }, [])

    async function listPosts() {
        try {
            postArr = await userdb.getAllPost(userdata.$id)
        } catch (error) {
            alert("error please try again")
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen p-10">
            <div className="min-h-1/2 w-full flex flex-col justify-center items-center " >
                <p className="text-3xl text-gray-500 font-medium">Your Posts</p>
                <div className="bg-green-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {
                        postArr.map((post) => (
                            <Postcard
                                tittle={post.topic}
                                description={post.description}
                                src={post.imageUrl}
                                userId={userdata.$id}
                                slug={post.slug}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}