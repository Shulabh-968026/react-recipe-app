import React from 'react'
import { Link } from 'react-router-dom'
const RecipeCard=(props)=>{
    console.log(props.recipe)

    return (
        <div className="col-sm-4 mt-3">
            <div className="card" style={{width:"400px"}}>
                <img className="card-img-top" src={props.recipe.recipe.image} alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">{props.recipe.recipe.label}</h4>
                        <span className="card-text float-start">Desh Type --  {props.recipe.recipe.dishType}</span>
                        <span className="card-text float-end">Meal Type -- {props.recipe.recipe.mealType}</span>
                         <a href="#" className="btn btn-primary mt-3">See Full Details</a>
                    </div>
            </div>
        </div>
    )
}

export default RecipeCard
