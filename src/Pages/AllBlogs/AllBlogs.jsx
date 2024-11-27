import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log("project", blogs);

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
    <div className="min-h-screen">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
        {blogs?.data?.map((blog) => (
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
    </div>
  );
};

export default AllBlogs;
