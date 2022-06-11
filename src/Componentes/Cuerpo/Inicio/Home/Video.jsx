import React, {Component} from "react";
import YouTube from 'react-youtube';
import "./home.css";

//https://www.youtube.com/watch?v=5rwtnG7OhKA
//https://youtu.be/5rwtnG7OhKA

class Video extends Component {
    render(){
        const opts = {
            height: '390',
            width: '790',
        };
        const {videoId} =this.props;

        return (
            <>
            <h2 className="tituloVideo">¡Conoce más sobre Coco's Boutique! Te invitamos a nuestra tienda.</h2>
            <div className="divVideo">
                <YouTube videoId={videoId} opts={opts}/>
            </div>
            </>
        );
    }
}

export default Video;