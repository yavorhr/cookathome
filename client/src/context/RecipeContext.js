import { createContext } from "react";
import { useFetch } from "../hooks/useFetch.js";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext();

export const RecipeProvider = ({
    children
}) => {
    const [recipes, setRecipes] = useFetch("http://localhost:3030/data/recipes", []);
    const navigate = useNavigate();

    const createRecipeHandler = (newRecipe) => {
        setRecipes(state =>
            [...state,
                newRecipe]);

        navigate(`/details/${newRecipe._id}`)
    }

    const onRecipeEdit = (recipeId, updatedRecipe) => {
        setRecipes(state => state.map(r => r._id === recipeId ? updatedRecipe : r));
        navigate(`/details/${recipeId}`)
    }

    return (
        <RecipeContext.Provider value={{
            createRecipeHandler,
            onRecipeEdit,
            recipes
        }}>
            {children}
        </RecipeContext.Provider>)
}