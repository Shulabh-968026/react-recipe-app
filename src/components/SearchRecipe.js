
import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard';
function SearchRecipe()
{
    const APPLICATION_ID="34b0f5a1";
    const APPLICATION_KEY="ade5786bf4db5e3a351c184dab933c2b";	

    const [searchValue,setSearchValue]=useState()
    const [recipeList,setRecipeList]=useState([])
    const [query,setQuery]=useState("Banana")

    useEffect(()=>{
        getRecipe();
    },[query])

    const requestReq=`https://api.edamam.com/search?q=${query}&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`
    
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
    const recipeSubmit=e=>{
        e.preventDefault()
        setQuery(searchValue)
    }
    console.log(recipeList.length)
    return (
        <>
          <div className="row">
          <form onSubmit={recipeSubmit}>
            <div className="col-lg-6 m-auto">
                    <div className="form-group mt-3">
                        <input type="search" placeholder="Enter Recipe Name.."
                             className="form-control p-2 float-start"
                             onChange={(e)=>setSearchValue(e.target.value)}
                             value={searchValue}
                             style={{fontSize:"20px",fontStyle:"italic"}}/>
                    </div>
            </div>
            <div className="col-lg-3 clearfix float-end" style={{marginLeft:"0px"}}>
                <input type="submit" className="btn btn-primary btn-lg" value="Search"/>
            </div>
            </form>
          </div> 
          <div className="row">
              { recipeList.length ? recipeList.map((recipe)=><RecipeCard recipe={recipe}/>)
               : <div className="col-lg-8 m-auto">
                   <h1 className="text-center text-info">No Record Found!!</h1>
                   </div>
            } 
          </div>
        </>
    )
}

export default SearchRecipe
