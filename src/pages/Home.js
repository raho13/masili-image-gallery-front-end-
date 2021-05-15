import React from "react";
import img from "../Assets/4.jpg";
import img1 from "../Assets/r.jpg";
import img2 from "../Assets/p.jpg";
import img3 from "../Assets/l.jpg";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="probootstrap-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 mb40">
              <h2>Burada hemcinin</h2>
              <p>buralara isdediyi sheyi yaza bilersen</p>
            </div>
          </div>
          <div className="row probootstrap-gutter16">
            <div
              className="col-md-4 probootstrap-animate fadeIn probootstrap-animated"
              data-animate-effect="fadeIn"
            >
              <a
                href="single-page.html"
                className="img-bg"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="probootstrap-photo-details">
                  <h2>A turquoise colored sea</h2>
                  <p>Landscape</p>
                </div>
              </a>
            </div>
            <div
              className="col-md-8 probootstrap-animate fadeIn probootstrap-animated"
              data-animate-effect="fadeIn"
            >
              <a
                href="single-page.html"
                className="img-bg"
                style={{ backgroundImage: `url(${img1})` }}
              >
                <div className="probootstrap-photo-details">
                  <h2>Frozen Mount</h2>
                  <p>Landscape</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row probootstrap-gutter16">
            <div
              className="col-md-5 probootstrap-animate fadeIn probootstrap-animated"
              data-animate-effect="fadeIn"
            >
              <a
                href="single-page.html"
                className="img-bg"
                style={{ backgroundImage: `url(${img2})` }}
              >
                <div className="probootstrap-photo-details">
                  <h2>Earthly Clay</h2>
                  <p>Landscape</p>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 probootstrap-animate fadeIn probootstrap-animated"
              data-animate-effect="fadeIn"
            >
              <a
                href="single-page.html"
                className="img-bg"
                style={{ backgroundImage: `url(${img3})` }}
              >
                <div className="probootstrap-photo-details">
                  <h2>Man Captured</h2>
                  <p>Landscape</p>
                </div>
              </a>
            </div>
            <div
              className="col-md-4 probootstrap-animate fadeIn probootstrap-animated"
              data-animate-effect="fadeIn"
            >
              <a
                href="single-page.html"
                className="img-bg"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="probootstrap-photo-details">
                  <h2>Mountain with pines</h2>
                  <p>Landscape</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row probootstrap-gutter16">
            <div
              className="col-md-8 probootstrap-animate fadeIn probootstrap-animated"
              data-animate-effect="fadeIn"
            >
              <a
                href="single-page.html"
                className="img-bg"
                style={{ backgroundImage: "url(img/img_7.jpg)" }}
              >
                <div className="probootstrap-photo-details">
                  <h2>Mountains</h2>
                  <p>Landscape</p>
                </div>
              </a>
            </div>
            <div
              className="col-md-4 probootstrap-animate fadeIn probootstrap-animated"
              data-animate-effect="fadeIn"
            >
              <a
                href="single-page.html"
                className="img-bg"
                style={{ backgroundImage: "url(img/img_6.jpg)" }}
              >
                <div className="probootstrap-photo-details">
                  <h2>Beautiful Sunset</h2>
                  <p>Landscape</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
