
// tut:24 Fatching API key from news API

//rce
import React from 'react'

const NewsItem=(props)=>  {
  
  
    let {title ,description,imageUrl,newsUrl,auther ,date,source} =props // this is class based so the props are used to this.props
    return (
      <div className='my-3'>
              <div className="card">
                <div style={{display:'flex',justifyContent :'flex-end',porsion:'absolute',right:'0'}}>
              <span className=" badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                          {source}
                    </span>
                    </div>
               <img src={!imageUrl?"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                 <h5 className="card-title">{title} 
                 {/* tut 32 adding time , auther and news source */}
                 </h5>
                  <p className="card-text">{description}...</p>
                  <p className="card-text"><small className =" text-danger">By {!auther?"unknown":auther} on {new Date(date).toGMTString()}</small></p>
                 <a  rel="noreference" href={newsUrl} className="btn  btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  
}

export default NewsItem
