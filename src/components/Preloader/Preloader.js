import React from "react";
import "./Preloader.scss";

const Preloader = ({ isLoading }) => {
  const preloaderClassName = `preloader`;
  return (
    <div className={preloaderClassName}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
