import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import AlertContainer, { Alert } from "../../Helpers/alert";
export default function Gallery() {
  const [data, setdata] = useState([]);
  const [PopVis, setPopVis] = useState(false);
  const [popupdata, setpopupdata] = useState({
    title: "",
    description: "",
    id: "",
    image_id: "",
  });
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = () => {
    axios
      .get("post/all")
      .then((res) => {
        setdata(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editpost = (e) => {
    e.preventDefault();
    axios
      .post(
        `post/update/${popupdata.id}`,
        {
          description: e.target.description.value,
          title: e.target.title.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        Alert.success("Təbriklər. Uğurla Yeniləndi");
        setPopVis(false);
        document.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletepost = (e) => {
    axios
      .post(`post/delete/${e._id}`, {
        image_id: e.image_id,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const visform = (e) => {
    setpopupdata({
      ...popupdata,
      title: e.title,
      description: e.description,
      id: e._id,
      image_id: e.image_id,
    });
    setPopVis(true);
  };

  const PopupFrom = () => {
    if (PopVis) {
      return (
        <>
          <form id="popupform" onSubmit={editpost}>
            <div className="form-group">
              <label htmlFor="title">title</label>
              <input
                type="text"
                autoComplete="off"
                name="title"
                value={popupdata.title}
                onChange={(e) => {
                  setpopupdata({ ...popupdata, title: e.target.value });
                }}
                className="form-control"
                placeholder="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">description</label>
              <textarea
                onChange={(e) => {
                  setpopupdata({ ...popupdata, description: e.target.value });
                }}
                name="description"
                className="form-control"
                placeholder="description"
                value={popupdata.description}
              />
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="submit" className="btn btn-secondary">
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
      <AlertContainer />
      {PopupFrom()}
      {data.map((post, index) => {
        return (
          <Card
            key={index}
            editpost={visform}
            deletepost={deletepost}
            data={post}
          />
        );
      })}
    </div>
  );
}
