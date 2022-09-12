import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog/blog";
const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            {
            blogs.map((blog,index) => <Blog blog={blog} key={index}></Blog>)
            }
        </div>
    );
};

export default Blogs;