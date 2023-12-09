import React from "react";
import '../statics/css/News.css';

const NewsItem=({title, desciption,imgUrl,url,author,date,source})=>{
    // let { title, desciption,imgUrl,url,author,date,source } = props;
    return (
      <div className="container my-4">
          <div className="card">
              <img src={imgUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"  style={{left:'85%',zIndex:'1'}}>{source}</span></h5>
                <p className="card-text">
                  {desciption}
                </p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toTimeString()}</small></p>
                <a href={url} className="btn btn-dark btn-sm">
                  Read More
                </a>
              </div>
            </div>
      </div>
    );
  
}

export default NewsItem;
