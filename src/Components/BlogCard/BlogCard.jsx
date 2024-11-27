// import { useEffect, useState } from "react";

// const BlogCard = () => {

//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//       fetch("http://localhost:5000/api/dashboard/get-blog")
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error("Network response was not ok");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           console.log("API Data:", data);
//           setBlogs(data || []);
//         })
//         .catch((error) => console.error("Error fetching data:", error));
//     }, []);

//     return (
//         <div>

//         </div>
//     );
// };

// export default BlogCard;
