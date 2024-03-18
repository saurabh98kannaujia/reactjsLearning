import React, {Component} from "react";

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            msg : "Hello World"
        }
    }
    changedMessage =() => {
        this.setState({msg:"Message is changed..!"})
    }
    render() {
        return <div>
           <h1>  {this.state.msg} </h1>

           <button onClick={()=>this.changedMessage()}>Change Message</button>
        </div>
    }
}

export default Welcome