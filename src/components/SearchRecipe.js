import axios from 'axios'
import React, { useEffect, useState } from 'react'
const SearchRecipe=()=>{

    const [searchValue,setSearchValue]=useState("Banana")
    const [recipeList,setRecipeList]=useState([])
    console.log(process.env.APPLICATION_ID,process.env.APPLICATION_KEY)

    useEffect(()=>{
        const response=axios.get(`https://api.edamam.com/search?q=${searchValue}&app_id=${process.env.APPLICATION_ID}&app_key=${process.env.APPLICATION_KEY}`)
        console.log(response.json)
    })
    return (
        <>
          <div className="row">
            <div className="col-lg-8 m-auto">
                <form>
                    <div className="form-group mt-3">
                        <input type="search" placeholder="Enter Recipe Name.."
                             className="form-control p-2"
                             onChange={(e)=>setSearchValue(e.target.value)}
                             value={searchValue}
                             style={{fontSize:"20px",fontStyle:"italic"}}/>
                    </div>
                </form>
            </div>
          </div> 
        </>
    )
}

export default SearchRecipe
