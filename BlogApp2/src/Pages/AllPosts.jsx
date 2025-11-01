import { useEffect, useState } from "react";
import userdb from "../appwrite/appwriteDb";
import { Postcard } from "../components";

export default function AllPosts() {

    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        userdb.getAllPostsbyAllUsers()
            .then((postData) => {
                setAllPosts(postData.documents)
                console.log(postData.documents)
            })
            .catch((error)=>{
                alert("please try again")
            })
    }, [])

    return (
        <div className="bg-white text-gray-900 min-h-screen flex flex-col">

            <section className="bg-green-50 text-start py-20 px-6">
                <p className="text-7xl text-gray-500 font-medium">Posts</p>
            </section>

            <hr className="border-gray-200 my-10 w-11/12 mx-auto" />
            <div className="min-h-screen p-10">
                <div className="min-h-1/2 w-full flex flex-col justify-center items-center " >
                    {
                        allPosts.length > 0 ? (
                            <ul className="grid m-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {
                                    allPosts.map((post) => (
                                        <li key={post.topic}>
                                            <Postcard
                                                tittle={post.topic}
                                                description={post.description}
                                                src={post.imageUrl}
                                                slug={post.$id}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        ) : (
                            <div className="flex flex-row justify-center items-center">
                                <p className="text-3xl text-gray-500 font-medium ">
                                    no posts...
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

