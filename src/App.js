import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid'
import './index.css'
import { Modal } from '././components/Modal'
import Clock from '././components/Clock'
import Tabs from '././components/Tabs';
import tabs from './tabs.json';
import videos from './videos.json';
import { VideoList } from './components/VideoList';
import Player from './components/Player';
import { Reader } from './components/Reader';
import publications from './publications.json';

class App extends Component {

  state = {
    todos: [],
    message: '',
    showModal: false,
    selectedVideo:null,
  };
  
  // toggleModal = () => {
  //   console.log('click')
  //   this.setState(prevState => ({
  //   showModal: !prevState.showModal
  // }))
  // }
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

  // selectVideo = link => {
  //   this.setState({selectedVideo:link})
  // }

  render() {
    return (
      <>
        
        <Reader items={publications} />
        {/* <div style={{padding:24}}>
          <h1> Selected video : {this.state.selectedVideo}</h1>
          <VideoList videos={videos} onSelect={this.selectVideo} />
          <Player url={this.state.selectedVideo} />
        </div> */}

        {/* <Tabs items={tabs} /> */}
        {/* <button type='button' onClick={this.toggleModal}>
          Open Clock
        </button>

        {this.state.showModal && <Clock />} */}
       
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
{/* 
        <button type='button' onClick={this.toggleModal}>
          Open Modal
        </button>
        
        {this.state.showModal && (<Modal onClick={this.toggleModal}>

          <button type='button' onClick={this.toggleModal}> Close Modal</button>
        </Modal>
          
        )} */}
 
      </>
    );
  }
}

export default App;
