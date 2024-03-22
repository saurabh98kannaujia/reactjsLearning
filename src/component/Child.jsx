import React, {Component} from "react";
import ListRendering from "./ListRendering"


class Child extends Component {

    temp = 2
    render() {
        return <ListRendering />
        // let message;
        // if(this.temp === 1) {
        //     message = <div>Hello Bro..!</div>
        // } else {
        //     message = <div>Hello Bhai..!</div>
        // }
        // return message

        // return this.temp === 1 ? ( <div>Hello Bro..!</div>) : ( <div>Hello Bhai..!</div>);
    }
}

export default Child