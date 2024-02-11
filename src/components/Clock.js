import { Component } from "react";

export default class extends Component{
    state = {
        time: new Date().toLocaleTimeString(),
    }
    
    intervalId = null;

    componentDidMount(){
        console.log('mounted')
    
        this.intervalId = setInterval(
            () => this.setState({ time: new Date().toLocaleTimeString() })
        ,1000)
    }

    componentWillMount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <>
                <div>{this.state.time}</div>
            </>
        )
    }

}