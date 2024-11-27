import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostedTime from "../PostedTime/PostedTime";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/get-blog")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Data:", data);
        setBlogs(data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" max-w-7xl mx-auto ">
      <h1 className="text-4xl text-slate-300 font-semibold mt-10 mb-6 text-center">
        My Blogs
      </h1>
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          {blogs?.data?.slice(0, 4).map((blog) => (
            <div
              key={blog._id}
              className="border-[1px] rounded-xl border-gray-500/[0.300] shadow-[0_0_130px_1px_rgba(59,130,246,0.5)]"
            >
              <img
                className="h-[60%] w-full rounded-xl p-2 bg-opacity-100 bg-black"
                src={blog.image}
                alt=""
              />
              <div className="p-4">
                <Link to={`/blog-details/${blog._id}`}>
                  <h2 className="text-lg font-medium text-white hover:text-blue-500 hover:underline">
                    {blog.title.slice(0, 25)}
                    {blog.title.length > 25 && "..."}
                  </h2>
                  <PostedTime postTime={blog.createdAt}>

                  </PostedTime>
                </Link>
                <p className="mt-2 text-blue-500">{blog.readTime} Min Read</p>
                <p className="mt-1 text-slate-300">
                  {blog.blogContent.slice(0, 60)}
                  {blog.blogContent.length > 60 && "..."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/all-blogs" className="flex justify-center">
          <button className=" text-center text-black px-5 gap-3 mt-4 mb-10 py-2.5 rounded-md bg-slate-200 flex items-center">
            All blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
