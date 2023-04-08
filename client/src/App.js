import './App.css';

import { useFetch } from '../src/hooks/useFetch.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { RecipeContext } from './context/RecipeContext.js';
import { AuthProvider } from './context/AuthContext.js';

import { HomePage } from "./Components/Home/HomePage.js";
import { Login } from "./Components/Login/Login.js";
import { Register } from "./Components/Register/Register.js";
import { Profile } from "./Components/Profile/Profile.js";
import { CatalogArticles } from "./Components/CatalogeArticles/CatalogArticles.js";
import { CatalogRecipes } from './Components/CatalogRecipes/CatalogRecipes.js';
import { ArticleDetails } from "./Components/ArticleDetails/ArticleDetails.js";
import { Favorites } from './Components/Favorites/Favorites.js';
import { ArticleCategories } from './Components/ArticleCategories/ArticleCategories.js';
import { CreateArticle } from './Components/CreateArticle/CreateArticle.js';
import { EditArtice } from './Components/EditArticle/EditArticle.js';
import { CreateRecipe } from './Components/CreateRecipe/CreateRecipe.js';
import { EditRecipe } from './Components/EditRecipe/EditRecipe.js';
import { RecipeDetails } from './Components/DetailsRecipe/RecipeDetails.js';
import { GroceryList } from './Components/GroceryList/GroceryList.js';
import { Footer } from "./Components/common/Footer/Footer.js";
import { Navbar } from './Components/common/Navigation/Navbar/Navbar.js';
import { Search } from './Components/Search/Search.js';
import {Logout} from './Components/Logout/Logout.js';


function App() {
    const [recipes, setRecipes] = useFetch("http://localhost:3030/data/recipes", []);
    const [articles, setArticles] = useFetch("http://localhost:3030/data/articles", []);

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
        <div className="App">
            <AuthProvider>
                <Navbar />
                <RecipeContext.Provider value=
                    {{
                        createRecipeHandler,
                        onRecipeEdit,
                        recipes
                    }}>
                    <Routes>
                        <Route path="/" element={<HomePage recipes={recipes} articles={articles} />} />
                        <Route path="/users/login" element={<Login />} />
                        <Route path="/users/register" element={<Register />} />
                        <Route path="/users/profile" element={<Profile />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/groecery-list" element={<GroceryList />} />
                        <Route path="/recipes/:season" element={<CatalogRecipes recipes={recipes} />} />
                        <Route path="/details/:recipeId" element={<RecipeDetails />} />
                        <Route path="/edit/:recipeId" element={<EditRecipe />} />
                        <Route path="/recipes/:category/:type" element={<CatalogRecipes recipes={recipes} />} />
                        <Route path="/create/recipe" element={<CreateRecipe />} />
                        <Route path="/recipes/search" element={<Search />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </RecipeContext.Provider>
            </AuthProvider>

            {/* <CatalogArticles />
            <ArticleCategories></ArticleCategories> */}
            {/* <ArticleDetails /> */}
            {/* <CreateArticle></CreateArticle> */}
            {/* <EditArtice></EditArtice> */}

            <Footer />
        </div>
    );
}

export default App;
