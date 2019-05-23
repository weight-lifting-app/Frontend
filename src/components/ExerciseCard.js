import React from 'react'

export default function ExerciseCard(props) {
    return (
    <section className="ex-card">
        {!props.selected ? (
          <div>Pick or add an exercise!</div>
        )
        :
        (
           <section className="p-8">
             <div className="flex justify-between">
              <h3 className="ex-title">{props.selected.name}</h3>
              <div>
                <button className="ex-btn w-12 h-12">E</button>
                <button className="ex-btn-2 w-12 h-12">D</button>
              </div>
             </div>
             <div className="text-left mt-8 ">
               <p className="w-full ex-body my-10">Amount Lifted: {props.selected.amount_lifted}</p>
               <p className="w-full ex-body my-10">Body Region: {props.selected.body_region}</p>
               <p className="w-full ex-body my-10">Reps: {props.selected.reps}</p>
               <p className="w-full ex-body my-10">Sets: {props.selected.sets}</p>
               <p className="w-full ex-body my-10">Date: {props.selected.date} </p>
             </div>
           
           </section>
        )
        }
    </section>
 )
}
