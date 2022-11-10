import React from "react";

import "./Image.css"

const Image = ({data}) =>{
    return(
        <div className="image-div">
            <img className="image" src={process.env.PUBLIC_URL + '/image/' + data.fileName} alt={data.fileName}/>
        </div>
    );
}

export default Image;