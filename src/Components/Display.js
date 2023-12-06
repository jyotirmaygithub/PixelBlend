import React, { useState } from "react";
import  download from '../Images/download-op.png'
import FileSaver from "file-saver";
import {useNavigate } from "react-router-dom";

export default function Display(props) {
  const [arrdata ,setarrdata] = useState(null)
  let {data,indexvalue} = props
  let navigate = useNavigate()
  let { id, urls,user } = data;


  function handlevent(){
      navigate(`/images/${id}`);
  }

  async function downloadimage() {
    const response = await fetch(arrdata);
    // setDownload("Downloading....")
    const blob = await response.blob();
    FileSaver.saveAs(blob, "image.jpg");
    // setDownload("Free Download")
  }
  async function datafetching() {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${process.env.React_App_wallpaper_app}`;
    let data = await fetch(url);
    let fetchdata = await data.json();
    setarrdata(fetchdata.urls.full)
    console.log(fetchdata.urls.full)
    downloadimage()
  }
  function downloading(event){
    event.stopPropagation()
    console.log(id)
     datafetching()
  }
  return (
      <div key={indexvalue} id={id} onClick={handlevent}className="universal2 single-box">
        <div className="image-box">
          <img className="for-image" src={urls.regular} alt="images" />
          <div className="text-box">
          <p >{user.location}</p>
          <p>{user.name}</p>
          </div>
          <div onClick={downloading} className="download-option">
            <img src={download} alt="" />
          </div>
        </div>
      </div>

  );
}
