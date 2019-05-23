import React, { Component } from 'react'
import './Exercise.css'


export default class ExerciseCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: '',
      isEditing: false,
      name: this.props.selected.name,
      body_region: this.props.selected.body_region,
      amount_lifted: this.props.selected.amount_lifted,
      reps: this.props.selected.reps,
      sets: this.props.selected.sets,
      date: this.props.selected.date
  }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value});
  }
  handleUpdate = (e, id) => {
    console.log('hu', id)
    const updateChanges = {
        name: this.state.name,
        body_region: this.state.body_region,
        amount_lifted: this.state.amount_lifted,
        reps: this.state.reps,
        sets: this.state.sets,
        date: this.state.date
    }
    e.preventDefault();
    this.props.updateExercise(updateChanges, id);
    this.setState({
        isEditing: false
    })
} 
moveToUpdate = () => {
  const activeState = this.state.isEditing;
  this.setState({
      isEditing: !activeState,
  })
}
handleDelete = () => {
  const id = this.props.selected.id
  this.props.deleteExercise(id)
  this.props.rebootExercise()
}
handleAdd = e => {
  e.preventDefault();
  const newExercise = {
    name: this.state.name,
    body_region: this.state.body_region,
    amount_lifted: this.state.amount_lifted,
    reps: this.state.reps,
    sets: this.state.sets,
    date: this.state.date
}
this.props.addExercise(newExercise);
this.props.rebootExercise()
}

  render() {
    return (
      <section className="ex-card">
        {!this.props.action ? 
        (
          <h2 className="ex-title mx-auto flex justify-center items-center h-full w-full leading-relaxed">Pick or add an exercise!</h2>
        )
        : this.props.isAdding ?
        (
        <section className="p-8">
                <div className="flex justify-between">
                          <input 
                            type="text"
                            placeholder='Exercise Name'
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInput}
                            />
                      <div>
                        <button className="ex-btn w-12 h-12" onClick={()=>{this.props.rebootExercise()}}> X </button>
                        
                        {/* <button className="ex-btn-2 w-12 h-12" onClick={()=>console.log('dddd')}> D </button> */}
                      </div>
                </div>
                <div className="text-left mt-8">
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Amount Lifted:</p>
                      <input type="text" placeholder='Amount Lifted' name="amount_lifted" value={this.state.amount_lifted}onChange={this.handleInput}/>
                    </div>
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Body Region:</p><input type="text" placeholder='Body Region' name="body_region" value={this.state.body_region}onChange={this.handleInput}/>
                    </div>
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Reps:</p><input type="text" placeholder='Reps' name="reps" value={this.state.reps}onChange={this.handleInput}/>
                    </div>
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Sets:</p><input type="text" placeholder='Sets' name="sets" value={this.state.sets}onChange={this.handleInput}/>
                    </div>
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Date:</p><input type="text" placeholder='Date' name="date" value={this.state.date}onChange={this.handleInput}/>
                    </div>
                </div>

          <button className="w-2/5 py-2 bg-green-400 hover:bg-green-600 rounded text-xl font-medium text-white" onClick={(e) => this.handleAdd(e)}>Submit Updates</button>
        </section>
        )
        :
        this.state.isEditing ?
        (
        <section className="p-8">
                <div className="flex justify-between">
                          <input 
                            type="text"
                            placeholder='Exercise Name'
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInput}
                            />
                      <div>
                        <button className="ex-btn w-12 h-12" onClick={()=>{this.moveToUpdate()}}> X </button>
                        
                        {/* <button className="ex-btn-2 w-12 h-12" onClick={()=>console.log('dddd')}> D </button> */}
                      </div>
                </div>
                <div className="text-left mt-8">
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Amount Lifted:</p>
                      <input type="text" placeholder='Amount Lifted' name="amount_lifted" value={this.state.amount_lifted}onChange={this.handleInput}/>
                    </div>
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Body Region:</p><input type="text" placeholder='Body Region' name="body_region" value={this.state.body_region}onChange={this.handleInput}/>
                    </div>
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Reps:</p><input type="text" placeholder='Reps' name="reps" value={this.state.reps}onChange={this.handleInput}/>
                    </div>
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Sets:</p><input type="text" placeholder='Sets' name="sets" value={this.state.sets}onChange={this.handleInput}/>
                    </div>
                    <div className="flex items-center">
                      <p className="w-1/2</div> ex-body my-4 mr-2">Date:</p><input type="text" placeholder='Date' name="date" value={this.state.date}onChange={this.handleInput}/>
                    </div>
                </div>

          <button className="w-2/5 py-2 bg-green-400 hover:bg-green-600 rounded text-xl font-medium text-white" onClick={(e) => this.handleAdd(e, this.props.selected.id)}>Submit Updates</button>
        </section>
        )
        :
        (
           <section className="p-8">
             <div className="flex justify-between">
              <h3 className="ex-title">{this.props.selected.name}</h3>
              <div>
                <button onClick={()=>{this.setState({isEditing:true})}}className="ex-btn w-12 h-12">E</button>
                <button onClick={()=>{this.handleDelete()}} className="ex-btn-2 w-12 h-12" > D </button>
              </div>
             </div>
             <div className="text-left mt-8 ">
               <p className="w-full ex-body my-10">Amount Lifted: {this.props.selected.amount_lifted}</p>
               <p className="w-full ex-body my-10">Body Region: {this.props.selected.body_region}</p>
               <p className="w-full ex-body my-10">Reps: {this.props.selected.reps}</p>
               <p className="w-full ex-body my-10">Sets: {this.props.selected.sets}</p>
               <p className="w-full ex-body my-10">Date: {this.props.selected.date} </p>
             </div>
           
           </section>
        )
        }
    </section>
    )
  }
}




