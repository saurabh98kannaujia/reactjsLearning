import React, {Component} from "react";
import Child from "./Child"

class Parent extends Component {

    constructor(props){
        super(props)
        this.state = {
            parenName: "Parent Name"
        }
        this.getParent = this.getParent.bind(this);
    }

    getParent() {
        alert("Hello Bro....." + this.state.parenName);
    }
    render() {
        return (<div>
         
            <Child />

        </div>)
    }
}

export default Parent