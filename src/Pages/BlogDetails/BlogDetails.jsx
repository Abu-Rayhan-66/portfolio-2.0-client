import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const [singleBlogs, setSingleBlogs] = useState({});
  const blog = singleBlogs?.data;
  console.log("singleBlog", singleBlogs.data);

  useEffect(() => {
    fetch(`http://localhost:5000/api/dashboard/get-single-blog/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Data:", data);
        setSingleBlogs(data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div className="min-h-[75vh] max-w-7xl mx-auto mt-10 md:flex gap-6">
      
      <div className="lg:w-1/2 order-1 md:order-2">
        <img
          className="w-full rounded-xl"
          src={blog?.image}
          alt={blog?.title || "Blog Image"}
        />
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 order-2 md:order-1">
        <h2 className="w-full text-white text-2xl font-semibold mb-6 mt-6 lg:mt-0">
          {blog?.title}
        </h2>
        <h2 className="w-full text-white mt-10 mb-10">{blog?.blogContent}</h2>
      </div>
    </div>
  );
};

export default BlogDetails;
