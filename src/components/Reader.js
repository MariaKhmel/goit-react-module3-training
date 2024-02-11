import { Component } from "react";
import { Publication } from "./Publication";

const LS_KEY = 'reader_index'
export class Reader extends Component{
    state = {
        index:0,
    }

    // onPrev = () => {
    //     this.setState(prevState=>({index : prevState.index-1}))
    // }

    // onNext = () => {
    //     this.setState(prevState => ({ index : prevState.index +1 }))
    // }

    componentDidMount() {
        const savedState = localStorage.getItem(LS_KEY)
    this.setState({index : Number(savedState)})
}

    componentDidUpdate(prevProps, prevState) {
        if (prevState.index !== this.state.index) {
            localStorage.setItem(LS_KEY, this.state.index)
        }
    }


    changeIndex = value => {
        this.setState(prevState => ({ index: prevState.index +value }))
    }

    render() {
        const { items } = this.props;
        const { index } = this.state;
        return (
            <>
                <section>
                    <button type="button" onClick={()=>this.changeIndex(-1)} disabled={index === 0 }>Back</button>
                    <button type="button" onClick={() => this.changeIndex(1)} disabled={index === items.length-1}>Next</button>
                </section>

                <p>{this.state.index + 1}/ {this.props.items.length}</p>

                <Publication item={items[this.state.index]} />
            </>
        )
    }
}