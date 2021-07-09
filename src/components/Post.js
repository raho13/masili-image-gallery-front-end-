import React from "react";

export default function Post({ data }) {
  return (
    < >
      <div
        className="col-md-6 probootstrap-animate fadeIn probootstrap-animated"
        data-animate-effect="fadeIn"
      >
        <a className="img-bg" style={{ backgroundImage: `url(${data.image})` }}>
          <div className="probootstrap-photo-details">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </a>
      </div>
    </>
  );
}
