import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, des,Imageurl,newsurl,author,date,source}=this.props
    return (
      <>
     
        <div className="container my-3">
      

        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
  </span>


  <img src= {!Imageurl?"https://images.livemint.com/img/2022/12/11/600x338/iqoo_11_series_1670745278106_1670745285837_1670745285837.jp/g":Imageurl}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{des}...</p>
    <p className="card-text"><small className="text-muted"> By {!author?'Unknow':'author'} on {new Date(date).toTimeString()}</small></p>
    <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
  </div>

</div>
  
      
</div>
</>

    )
  }


}

export default Newsitem