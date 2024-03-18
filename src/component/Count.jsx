import React, {Component} from "react";

class Count extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            count : 0
        }

    }
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    bulkIncrement() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return <div>
            <label >Count: {this.state.count}</label>
            <button onClick={()=>this.bulkIncrement()}>CLick</button>
        </div>
    }
}

export default Count