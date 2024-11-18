import React from 'react';
import { Link } from 'react-router-dom';
import '../Who.css';


const Links = (props) => {
  return (
    <div>
        <div className="row mt-5 ms-4">
            <a className='Text_Small' style={{fontSize:"20px"}}>{props.name} :</a>
        </div>
        <div className="row mt-4">
        <div className="col-8 d-flex ms-5">
        <Link to={props.link}  target='_blank'>
          <img className='img' src={props.img}  />
        </Link>
        </div>
       </div>
    </div>
  )
}

export default Links
