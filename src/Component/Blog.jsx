import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [Blogs, setBlogs] = useState([]);
  //   const { id, image } = Blogs;

  const fetch = async () => {
    await axios
      .get(
        "https://react-interview.1putym.easypanel.host/api/blog?order_by=asc&order_by_column=title"
      )
      .then((res) => {
        setBlogs(res.data.data.data[0]);
        // console.log(res.data.data.data[0]);
      });
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {/* {Blogs.map((blog) => (
        <div
          key={blog.id}
          className="card card-compact w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))} */}
      <div
        key={Blogs?.id}
        className="card card-compact w-96 bg-base-100 shadow-xl text-white text-start"
      >
        <figure>
          <img src={Blogs?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{Blogs?.title}</h2>
          <h2 className="card-title text-xs">{Blogs?.user}</h2>
          {/* <h2 className="card-title text-xs">{Blogs?.created - at}</h2> */}

          <p>{Blogs?.description}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/blog/${Blogs?.id}`}
              className="btn btn-primary text-sm hover:underline"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
