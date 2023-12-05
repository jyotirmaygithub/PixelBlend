import React from "react";
import  download from '../Images/download-op.png'
import {useNavigate } from "react-router-dom";

export default function Display(props) {
  let {data,indexvalue} = props
  let navigate = useNavigate()
  let { id, urls,user } = data;


  function handlevent(){
    navigate(`/images/${id}`);
  }
  return (
      <div key={indexvalue} id={id} onClick={handlevent}className="universal2 single-box">
        <div className="image-box">
          <img className="for-image" src={urls.regular} alt="images" />
          <div className="text-box">
          <p >{user.location}</p>
          <p>{user.name}</p>
          </div>
          <div className="download-option">
            <img src={download} alt="" />
          </div>
        </div>
      </div>

  );
}
