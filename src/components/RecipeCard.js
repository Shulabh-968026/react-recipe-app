import React from 'react'
const RecipeCard=(props)=>{
    console.log(props.recipe)

    return (
        <div className="col-sm-4 mt-3">
            <div className="card" style={{maxWidth:"450px",minWeight:"200px"}}  key={props.recipe.recipe.label} >
                <img className="card-img-top img-thumbnail" src={props.recipe.recipe.image} alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">{props.recipe.recipe.label}</h4>
                        <p><strong>Calories</strong> {props.recipe.recipe.calories} KCal.</p>
                        <span className="card-text float-start">Desh Type --  {props.recipe.recipe.dishType}</span>
                        <span className="card-text float-end">Meal Type -- {props.recipe.recipe.mealType}</span>
                    </div>
            </div>
        </div>
    )
}

export default RecipeCard
