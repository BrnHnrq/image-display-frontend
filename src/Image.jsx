import React from "react";

import "./Image.css"

const Image = ({data}) =>{

    const url = "http://localhost:8080/image";

    const deleteImage = async () =>{
        let imageIdUrl = url + "/" + data.id;
        await fetch(imageIdUrl, {
            method: 'DELETE',
        });
        
        window.location.reload(true)
    }

    return(
        <div className="image-div" key={data.id}>
            <div className="header-div">
                <p>{data.date}</p>
                <button onClick={() => deleteImage()}>Delete</button>
            </div>
            <img className="image" src={process.env.PUBLIC_URL + '/image/' + data.fileName} alt={data.fileName}/>
        </div>
    );
}

export default Image;