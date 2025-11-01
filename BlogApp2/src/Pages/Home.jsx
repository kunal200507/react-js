import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { Postcard } from "../components/index.js";
import userdb from "../appwrite/appwriteDb.js";

export default function Home() {
  const userState = useSelector((state) => state.appwriteAuthstore.isLoggedIn)
  const userdata = useSelector((state) => state.appwriteAuthstore.data)

  const [postArr, setPostArr] = useState([])

  useEffect(() => {

    if (userState) {
      userdb.getAllPost(userdata.$id)
        .then((responce) => {
          setPostArr(responce.documents)
        })
        .catch((error) => {
          alert("error please try again")
          console.log(error)
        })
    } else {
      userdb.getSixPosts()
        .then((responce) => {
          setPostArr(responce.documents)
        })
        .catch((error) => {
          alert("error please try again")
          console.log(error)
        })
    }

  }, [])

  if (userState) {
    return (
      <div className="bg-white text-gray-900 min-h-screen flex flex-col">

        <section className="bg-green-50 text-start py-20 px-6">
          <p className="text-7xl text-gray-500 font-medium">Your Posts</p>
        </section>

        {/* Divider */}
        <hr className="border-gray-200 my-10 w-11/12 mx-auto" />
        <div className="min-h-screen p-10">
          <div className="min-h-1/2 w-full flex flex-col justify-center items-center " >
            {
              postArr.length > 0 ? (
                <ul className="grid m-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {
                    postArr.map((post) => (
                      <li className="" key={post.topic}>
                        <Postcard
                          tittle={post.topic}
                          description={post.description}
                          src={post.imageUrl}
                          userId={userdata.$id}
                          slug={post.$id}
                        />
                      </li>
                    ))
                  }
                </ul>
              ) : (
                <div className="min-h-screen min-w-screen flex flex-row justify-center items-center">
                  <p className="text-3xl text-gray-500 font-medium ">
                    You have no posts...
                  </p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )

  } else {
    return (
      <div className="bg-white text-gray-900 min-h-screen flex flex-col">

        <section className="text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Share Your Thoughts With the World
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            WriteIt is a space where ideas, stories, and creativity come alive.
            Join a community of writers and readers from around the world.
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              ✍️ Start Writing
            </Link>
            <Link
              to="/allposts"
              className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium transition"
            >
              📖 Read Blogs
            </Link>
          </div>
        </section>

        <hr className="border-gray-200 my-10 w-11/12 mx-auto" />

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            ✨ Latest Blogs
          </h2>
          {
            postArr.length > 0 ? (
              <ul className="grid m-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                  postArr.map((post) => (
                    <li className="" key={post.topic}>
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
                  No posts...
                </p>
              </div>
            )
          }
        </section>

        <section className="bg-gray-50 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Share Your Story?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of writers making their mark on WriteIt.
          </p>
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Start Writing Now →
          </Link>
        </section>

      </div>
    );
  }
}
