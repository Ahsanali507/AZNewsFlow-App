import React, {useEffect,useState} from "react";
import Newsitem from "./NewsItem";
import Loading from "../utils/Spinner.js";
import PropTypes from 'prop-types';


const News=(props)=>{
  
    
const [articles, setarticles] = useState([]);
const [page, setpage] = useState(1);
const [loading, setloading] = useState(false);
const [totalResults, settotalResults] = useState(0);


  const updateNews=async (page)=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);                   
    let data=await fetch(url);    
    props.setProgress(30);                                                                                     
    let parseData=await data.json();
    props.setProgress(70);

    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    setloading(false);

    props.setProgress(100);
  }


// useeffect for everytime updations when click on buttons
useEffect((e) => {
    updateNews();
    // eslint-disable-next-line
}, []);

  const handlePrevPage=async ()=>{
    setpage(page-1);
    updateNews();

  }

  const handleNextPage=async ()=>{
    if(page+1>Math.ceil(totalResults/props.pageSize)){

    }
    else{
      setpage(page+1);
      updateNews();
    
    }
  
  }


    return (
      <div className="container my-3 cards-container">
        <h2 className="text-center">AZ News: Top-{props.category}-Headlines</h2>
        {loading && <Loading/>}
        <div className="row my-4 cards-row">
           {!loading && articles.map((element)=>{
            return   <div className="col-md-4 my-2 cards" key={element.url}>
            <Newsitem
              title={element.title}
              desciption={element.description}
              imgUrl={!element.urlToImage?"https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/08/GM-Tesla-self-driving.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1":element.urlToImage}
              url={element.url}
              author={element.author}
              date={element.date}
              source={element.source.name}
            />
          </div>
           })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={page<=1} className="btn btn-dark my-2" onClick={handlePrevPage}>&larr; Previous</button>
          <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} className="btn btn-dark my-2" onClick={handleNextPage}>Next &rarr;</button>
        </div>
      </div>
    );
}


News.defaultProps={
    pageSize:15,
    country:'us',
    category:'general',
  }

News.propTypes={
    pageSize:PropTypes.number,
    country:PropTypes.string,
    category:PropTypes.string,
  }


export default News;
