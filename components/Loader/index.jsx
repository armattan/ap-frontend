import React from "react";
import Lottie from "lottie-react";
import loader from "../../public/loader.json";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <Lottie animationData={loader} loop={true} style={{ width: 200 }} />
    </div>
  );
};

export default Loader;
