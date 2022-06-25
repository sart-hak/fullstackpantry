import React from "react";
import moment from "moment";
import blob from "../../images/blob.png"

const BlogDetailContainer = (props) => {
  return (
    <div className="BlogDetailContainer">
      <div className="BlogDetail">
        <h2>
          {props.title}
        </h2>

        <div className="DetailImageContainer">
          <img src={props.image} alt="" />
        </div>
        <div className="DetailContent">
          <div className="TimeDiv">
            <h3>{moment(props.updatedAt).format("MMMM Do YYYY")}</h3>
            <p>{moment(props.updatedAt).format("LT")}</p>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
      <img className="BlobLeft" src={blob} alt="" />
      <img className="BlobRight" src={blob} alt="" />
    </div>
  );
};

export default BlogDetailContainer;
