// Took this out for NOW
// Took this out for NOW
// Took this out for NOW

// import React from 'react';


// class AddForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             body_region: '',
//             amount_lifted: '',
//             reps: '',
//             sets: '',
//             date: ''
//         }
//     }

//     handleInput = e => {
//         this.setState({ [e.target.name]: e.target.value});
//     }


//   handleAdd = e => {
//     e.preventDefault();
//     console.log(this.props);
//     this.props.addExercise(this.state);
//   }
//     render() {
//         return (
//             <div className="add-form-container">
//                     <form>
//                         <input 
//                         type="text" 
//                         placeholder="Workout Name"
//                         name="name"
//                         value={this.state.name}
//                         onChange={this.handleInput}
//                         />
//                         <input 
//                         type="text"
//                         placeholder='Body Part Targeted'
//                         name="body_region"
//                         value={this.state.body_region}
//                         onChange={this.handleInput}
//                         />
//                         <input 
//                         type="text"
//                         placeholder='Weight Lifted'
//                         name="amount_lifted"
//                         value={this.state.amount_lifted}
//                         onChange={this.handleInput}
//                         />
//                         <input 
//                         type="text"
//                         placeholder='Reps'
//                         name="reps"
//                         value={this.state.reps}
//                         onChange={this.handleInput}
//                         />
//                         <input 
//                         type="text"
//                         placeholder='Sets'
//                         name="sets"
//                         value={this.state.sets}
//                         onChange={this.handleInput}
//                         />
//                         <input 
//                         type="text"
//                         placeholder='Date'
//                         name="date"
//                         value={this.state.date}
//                         onChange={this.handleInput}
//                         />
//                         <button onClick={this.handleAdd}>Add Workout</button>
//                     </form>
//             </div>
//         )
//     }
// }


// export default AddForm;

