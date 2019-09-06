import * as React from 'react';
import {server} from '../../App';

const Twit = (props) => {

    return  <div style={{background: props.background}}>

        {props.media.length > 0 &&
             <img src={server + props.media[0].url}></img>}
        <p>{props.text}</p>

    </div>



}

export default Twit;