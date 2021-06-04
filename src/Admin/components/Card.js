import React from "react";
export default function Card({ method, data }) {
  return (
    <div className="AD_card card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={data.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        <div className="btn-group pl">
          <button
            onClick={() => {
              method(data);
            }}
            type="button"
            className="btn btn-secondary"
          >
            edit
          </button>
          <button type="button" className="btn btn-danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
