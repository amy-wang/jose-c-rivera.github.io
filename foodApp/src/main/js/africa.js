import React from 'react'
import {Link} from 'react-router'

let Africa = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}></Link></button>
                <h1>AFRICA MAP PLACE-HOLDER</h1>
                <li><Link to="/discover">DISCOVER</Link></li>
            </div>
        )
    },
});

export class africa extends React.Component{
    render(){
        return(<Africa/>);
    }
}