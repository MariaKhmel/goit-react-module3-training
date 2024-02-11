import { Children, Component } from 'react'
import '.././index.css'

export class Modal extends Component {
    state = {
        
    }
    componentDidMount() {

        console.log('mount');
        window.addEventListener('keydown', this.handleEscModalClose)

    }
    

    componentWillUnmount() {
        console.log('unmount')
        window.removeEventListener('keydown', this.handleEscModalClose)
    }


    handleEscModalClose = e => {
        if (e.code === 'Escape') {
            this.props.onClick();

        }
    }

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            console.log('click')
            this.props.onClick();
        }
    }


    render() {
        
        const { children } = this.props;
        return (

            <div className='backdrop' onClick={this.handleBackdropClick}>
                <div className='modal'> </div>
                {children}
            </div>


        )
    }       
}

   