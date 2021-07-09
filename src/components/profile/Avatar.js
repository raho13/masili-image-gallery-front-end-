import axios from "axios";
import React, { useState, useEffect } from "react";
import { ReactComponent as Trash } from "../../Assets/icons/trash.svg";
import defaultImg from "../../Assets/unknow.png";
import Swal from "sweetalert2";
export default function Avatar({ method, data }) {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState(defaultImg);
  useEffect(() => {
    if (data.url) {
      setPreviewSource(data.url);
    } else {
      setPreviewSource(defaultImg);
    }
  }, []);

  const handleFileInputChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      previewFile(file);
      setFileInputState(e.target.value);
    } else {
      setFileInputState("");
      setPreviewSource(defaultImg);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      method(reader.result);
    };
    reader.onerror = () => {
      console.error("error");
    };
  };
  const deleteAvatar = () => {
    Swal.fire({
      title: "Əminsiniz?",
      text: "Avatar silinsin?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Xeyir",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("profile/image/delete", { public_id: data.id })
          .then((res) => {
            setPreviewSource(defaultImg);
            Swal.fire("Silindi!", "", "success");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <>
      <div id="avatarCnt">
        <input
          id="AVATAR_INPUT"
          type="file"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <div className="user-avatar">
          {previewFile ? (
            <div
              className="av"
              style={{
                backgroundImage: `url(${previewSource})`,
              }}
            ></div>
          ) : (
            setPreviewSource(
              "https://bootdey.com/img/Content/avatar/avatar1.png"
            )
          )}
        </div>
      </div>
      {data.url ? (
        <Trash
          style={{ cursor: "pointer" }}
          onClick={() => {
            deleteAvatar();
          }}
        />
      ) : null}
    </>
  );
}
