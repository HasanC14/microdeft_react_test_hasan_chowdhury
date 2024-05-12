import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogCard = () => {
  const id = useParams();
  const [Blog, setBlog] = useState([]);
  //   const { id, image } = Blog;

  const fetch = async () => {
    await axios
      .get(`https://react-interview.1putym.easypanel.host/api/blog/${id}`)
      .then((res) => {
        setBlog(res.data.data.data[0]);
        // console.log(res.data.data.data[0]);
      });
  };
  useEffect(() => {
    fetch();
  }, []);
  return <div>{Blog.title}</div>;
};

export default BlogCard;
