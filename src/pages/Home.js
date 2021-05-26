import React, { useEffect, useState } from "react";
import img from "../Assets/4.jpg";
import img1 from "../Assets/r.jpg";
import img2 from "../Assets/p.jpg";
import img3 from "../Assets/l.jpg";
import Navbar from "../components/navbar";
import axios from "axios";
import Post from "../components/Post";
export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = () => {
    axios
      .get("https://masili-api.herokuapp.com/posts")
      .then((res) => {
        setdata(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="probootstrap-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 col-md-offset-3 mb40">
              <h2>Burada hemcinin</h2>
              <p>buralara isdediyi sheyi yaza bilersen</p>
            </div>
          </div>
          <div className="row probootstrap-gutter16">
            {data.map((post) => {
              return <Post data={post} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
