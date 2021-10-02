import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard';
function SearchRecipe()
{
    const APPLICATION_ID="34b0f5a1";
    const APPLICATION_KEY="ade5786bf4db5e3a351c184dab933c2b";	

    const [searchValue,setSearchValue]=useState("Banana")
    const [recipeList,setRecipeList]=useState([])

    useEffect(()=>{
        getRecipe();
    },[searchValue])

    const requestReq=`https://api.edamam.com/search?q=${searchValue}&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`
    
    const getRecipe=async()=>{
        try{
            const response = await fetch(requestReq)
            const data=await response.json()
            setRecipeList(data.hits)
            console.log(data.hits)
        }
        catch(err)
        {
            console.log("No Record Found!!!")
        }
       
    }
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
          <div className="row">
              { recipeList ?
                recipeList.map((recipe)=><RecipeCard recipe={recipe}/>)
               : <h1 className="bg-danger">No Record Found!!</h1>
            } 
          </div>
        </>
    )
}

export default SearchRecipe
