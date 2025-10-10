import { Link } from "react-router";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">

      {/* Hero Section */}
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
            to="/write"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            ✍️ Start Writing
          </Link>
          <Link
            to="/blogs"
            className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium transition"
          >
            📖 Read Blogs
          </Link>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-gray-200 my-10 w-11/12 mx-auto" />

      {/* Latest Blogs Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          ✨ Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card Example */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition bg-white"
            >
              <img
                src={`https://source.unsplash.com/random/400x250?sig=${i}&blog`}
                alt="Blog"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">
                Blog Title {i}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                A short description or excerpt from the blog goes here to attract readers.
              </p>
              <Link
                to={`/blog/${i}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Ready to Share Your Story?
        </h2>
        <p className="text-gray-600 mb-6">
          Join thousands of writers making their mark on WriteIt.
        </p>
        <Link
          to="/write"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition"
        >
          Start Writing Now →
        </Link>
      </section>

    </div>
  );
}
