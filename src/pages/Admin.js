import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export default function Admin() {
  const [fileInp, setfileInp] = useState("sekil sec");

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setfileInp(file.name);
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result, e);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setErrMsg("something went wrong!");
    };
  };

  const uploadImage = async (base64EncodedImage, e) => {
    try {
      await axios.post("https://masili-api.herokuapp.com/posts", {
        data: base64EncodedImage,
        title: e.target.title.value,
        description: e.target.description.value,
        category: e.target.category.value,
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Təbriklər.Uğurla Yükləndi", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      e.target.title.value = "";
      e.target.description.value = "";
      e.target.category.value = "";
      setfileInp("sekil sec");
      setPreviewSource("");

      console.log("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };
  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmitFile}>
        <div className="form-group">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            aria-describedby="emailHelp"
            placeholder="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">category</label>
          <input
            name="category"
            type="text"
            className="form-control"
            id="category"
            aria-describedby="emailHelp"
            placeholder="category"
          />
        </div>

        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              className="custom-file-input"
              aria-describedby="inputGroupFileAddon01"
              id="fileInput"
              type="file"
              name="image"
              onChange={handleFileInputChange}
              value={fileInputState}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {fileInp}
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          gonder
        </button>
      </form>
      {!(previewSource === "") ? (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      ) : null}
    </div>
  );
}
