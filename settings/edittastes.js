import React from 'react'
import {Link} from 'react-router'

let Edittastes = React.createClass({

    getInitialState: function() {
        return {
            tastes: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({tastes: e.target.value});
      }

      handleSubmit(e) {
        alert('Your tastes is edited: ' + this.state.tastes);
        e.preventDefault();
      }

   render(){
           return(
           <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.tastes} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class edittastes extends React.Component{
    render(){
        return(<Edittastes/>);
    }
}