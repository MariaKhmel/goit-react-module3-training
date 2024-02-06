import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid'
import './index.css'
import {Modal} from '././components/Modal'

class App extends Component {

  state = {
    todos: [],
    message: '',
    showModal:false,
  };
  
  toggleModal = () => {
    console.log('click')
    this.setState(prevState => ({
    showModal: !prevState.showModal
  }))
  }
//   componentDidMount() {

//     console.log('mount')
//     // const todos = localStorage.getItem('todos');
//     // const parsedJSON = JSON.parse(todos);
//     // if (parsedJSON) {
//     //   this.setState({ todos: parsedJSON })
//     // }

    
//     window.addEventListener('keydown', this.handleEscModalClose)
  
// }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.todos !== prevState.todos) {
//       localStorage.setItem('todos', JSON.stringify(this.state.todos))
//     }
//   }

//   componentWillUnmount() {
//     console.log('unmount')
//     window.removeEventListener('keydown', this.handleEscModalClose)
//   }


//   handleEscModalClose = e => {
//     if (e.code === 'Escape') {
//       this.toggleModal();
//     }
//   }


  


//   handleChange=(e)=> {
//     const { value } = e.target
//     this.setState({
//       message:value
//    })
//   }

//   addtodo = (newToDo) => {
//     this.setState(prevState => ({
//       todos: [...prevState.todos, newToDo],
//       message: '',
//     }))
//   }

//   handleSubmit=(e) =>{
//     e.preventDefault();
//     const text = e.target.elements.input.value;
//     const todo = {
//       id: nanoid(),
//       text,
//     }
//     this.addtodo(todo)

//   }
//   deleteToDo = ({ currentTarget }) => {
//     console.log(currentTarget)
// }


  render() {
    const modalRoot = document.querySelector('#modalRoot')
    return (
      <>
        {/* <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name='input' value={this.state.message} />
          <button type="submit" >
         Save
          </button>
        </form>


        <div>
          {this.state.todos && this.state.todos.map(todo => (
            <li key={todo.id}> {todo.text}
              <button style={{ marginLeft: '7px' }} type="button" onClick={this.deleteToDo} >
                Delete
            </button>
            
            </li>
          )
  
  )}
        </div> */}

        <button type='button' onClick={this.toggleModal}>
          Open Modal
        </button>
        
        {this.state.showModal && (<Modal onClick={this.toggleModal}>

          <button type='button'> Close Modal</button>
        </Modal>
          
        )}
 
      </>
    );
  }
}

export default App;
