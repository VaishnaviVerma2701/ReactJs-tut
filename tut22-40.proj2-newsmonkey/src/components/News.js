//  tut:23  components stracture of our newMinkey
import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News =(props) => {
         const[articles,setArticles] =useState([])
         const[loading,setLoading] =useState(true)
         const[page,setPage] =useState(1)
         const[totalResults,setTotalResults] =useState(0)

    const capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
   }

  //  constructor(props) {
  //   super(props);
  //   console.log("hello i am constracter from News component");
  //   //set the state in constracter
    
  //   document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;
  // }

    const updateNews = async ()=>{
    props.setProgress(10)
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    //console.log(parsedData);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100)
  }

  //tut 27 to fatching api  => take the data in api url
  useEffect(()=>{
         document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;
         updateNews()
         // this  line is ignor the []=> dependency
        //eslint-disable-next-line 
  },[])
    
  // const handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews()
  //  };
  // const handleNextClick = async () => {
  //   setPage(page+1)
  //   updateNews()
  // };

  const fatchMoreData = async()=>{
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat( parsedData.articles))
    setTotalResults(parsedData.totalResults)
  
  }
    return (
      // <div className="container my-3">
      <>
        <h2 className="text-center " style={{margin:'35px 0px',marginTop:"89px"}}>NewsMonkey - Top  {capitalizeFirstLetter(props.category)} HeadLines</h2>
        {loading &&<Spinner/>}
        
        {/* tut 35 */}
        <InfiniteScroll 
            dataLength={articles.length}
            next={fatchMoreData}
            hasMore ={articles.length !== totalResults}
            loader={<Spinner/>}>
           <div className="container">
              <div className="row">
                 {/* if loading is  false than run artical porsion */}
                 {/* {!loading && articles.map((element) => { */}
                 {articles.map((element) => {
                 return (
                 <div className="col-md-4" key={element.url}>
                 {/* <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                 <NewsItem title={element.title ? element.title : ""}description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} auther={element.auther} date={element.publishedAt} source={element.source.name}/>
                </div>
              );
              })}
             </div>
           </div>
        </InfiniteScroll>
        {/* tut 28: adding prevous and next button */}
        {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous
          </button>
          <button disabled={page + 1 > Math.ceil(totalResults /props.pageSize )} type="button"className="btn btn-dark" onClick={handleNextClick}>Next &rarr;
          </button>
        </div> */}
      </>
    );
}
News.defaultProps ={
  country :"in",
  pageSize: 8,
  category:'general',
 }

 News.propTypes ={
  country: propTypes.string,
  pageSize:propTypes.number,
  category : propTypes.string
 }

export default News;
