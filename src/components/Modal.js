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
        // window.removeEventListener('keydown', this.handleEscModalClose)
    }


    handleEscModalClose = e => {
        console.log('yes')
        if (e.code === 'Escape') {
            this.props.onClick();
        }
    }




    render() {
        
        const { children } = this.props;
        return (

            <div className='backdrop'>
                <div className='modal'> </div>
                {children}
            </div>


        )
    }       
}

   