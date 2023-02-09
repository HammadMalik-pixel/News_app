import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:5,
    category:'general',
  }
  static propTypes= {
    country: PropTypes.string,
     pageSize:PropTypes.number,
    category:PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state={
        articles:[],
        loading:true,
        page:1,
        totalResults:0
    }
    document.titlte=this.props.category;
}
async update(){
let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2c3c4780d8141e1a62dd609b8623c3a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
this.setState({loading: true})
let data= await fetch(url)
let parseddata=await data.json()
this.setState({
  articles:parseddata.articles,
  totalResults:parseddata.totalResults,
  loading:false

})

}
async componentDidMount(){
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2c3c4780d8141e1a62dd609b8623c3a&page=1&pageSize=${this.props.pageSize}`;
//   this.setState({loading: true})
//   let data=await fetch(url)
//   let parseddata=await data.json()
//   this.setState({articles: parseddata.articles,
//      totalarticle:parseddata.totalResults,
//     loading:false})
// console.log(parseddata);
this.setState({
  page:this.state.page,
  
})
this.update();

}
handlePrevClick=async ()=>{ 
  // console.log("Previous");
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2c3c4780d8141e1a62dd609b8623c3a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading: true})
  // let data=await fetch(url)
  // let parseddata=await data.json()
  //   console.log(parseddata)
  // this.setState({
  //   page:this.state.page - 1,
  //   articles: parseddata.articles,
  //   loading: true
  // })
  
  this.update();
}


handleNextClick=async ()=>{
  if(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)){

  }
  else{
//   console.log("Next");
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2c3c4780d8141e1a62dd609b8623c3a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//   this.setState({loading: true})
// let data=await fetch(url)
// let parseddata=await data.json()
//   console.log(parseddata)
//   this.setState({
//     page:this.state.page + 1,
//     articles: parseddata.articles,
//     loading:false
//     })
this.setState({
  page:this.state.page+1,
  
})
this.update();
   }
  }
 fetchMoreData=async()=>{
this.setState({page:this.state.page+1})
let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2c3c4780d8141e1a62dd609b8623c3a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
this.setState({loading: true})
let data=await fetch(url)
let parseddata=await data.json()
this.setState({ 
  articles:this.state.articles.concat(parseddata.articles),
  totalarticle:parseddata.totalResults,
  loading:false
})
  }
  render() {
    return (
      < >  
      <h1 className="text center" style={{marginBottom:"50px",marginTop:"10px"}}>US Top-News from {this.props.category}</h1>
      {/* {this.state.loading && <Spinner/>} */}

      <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={this.state.articles.length !== this.state.totalResults}
    loader={<Spinner/>}
     >
      <div className="container">
      <div className="row">
     {this.state.articles.map((element)=>{
 return <div className="col md-" key={element.url}>
  <Newsitem title={element.title}des={element.description?element.description:""} Imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
  </div>

     })}
      </div>
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&larr;Previous</button>
            <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button"className="btn btn-dark"  onClick={this.handleNextClick} > Next &rarr;</button>
            </div> */}
      </>
    )
  }
}

export default News