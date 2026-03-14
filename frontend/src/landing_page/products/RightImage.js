import React from "react";
function rightImage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container t-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h2 style={{marginBottom:"25px"}}>{productName}</h2>
          <p className="fs-5 text-muted">{productDescription}</p>
          <div>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default rightImage;
