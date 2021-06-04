import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function Gallery() {
  const [data, setdata] = useState([]);
  const [PopVis, setPopVis] = useState(false);
  const [popupdata, setpopupdata] = useState({
    title: "",
    description: "",
  });
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

  const visform = (e) => {
    setPopVis(true);
    setpopupdata({ title: e.title, description: e.description });
  };
  const PopupFrom = () => {
    if (PopVis) {
      return (
        <>
          <form id="popupform">
            <div className="form-group">
              <label htmlFor="title">title</label>
              <input
                type="text"
                autoComplete="off"
                name="title"
                value={popupdata.title}
                onChange={(e) => {
                  setpopupdata({ title: e.target.value });
                }}
                className="form-control"
                placeholder="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">description</label>
              <textarea
                onChange={(e) => {
                  setpopupdata({ description: e.target.value });
                }}
                name="description"
                className="form-control"
                placeholder="description"
                defaultValue={popupdata.description}
              ></textarea>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary">
                save
              </button>
              <button
                onClick={() => {
                  setPopVis(false);
                }}
                type="button"
                className="btn btn-danger"
              >
                cancel
              </button>
            </div>
          </form>
          <div id="popup"></div>
        </>
      );
    }
  };
  return (
    <div className="AD-Cards">
      {PopupFrom()}
      {data.map((post, index) => {
        return <Card key={index} method={visform} data={post} />;
      })}
    </div>
  );
}
