import './App.css';
import { useFetch } from '../src/hooks/useFetch.js';
import { Routes, Route } from 'react-router-dom';

import { Navigation } from "./Components/common/Navigation/Navigation.js";
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
import { RecipeDetails } from './Components/RecipeDetails/RecipeDetails.js';
import { GroceryList } from './Components/GroceryList/GroceryList.js';
import { Footer } from "./Components/common/Footer/Footer.js"

function App() {
    const [recipes, setRecipes] = useFetch("http://localhost:3030/data/recipes", []);
    const [articles, setArticles] = useFetch("http://localhost:3030/data/articles", []);

    return (
        <div className="App">
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage recipes={recipes} articles={articles} />} />
                <Route path="/groecery-list" element={<GroceryList />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/users/register" element={<Register />} />
                <Route path="/users/profile" element={<Profile />} />
                <Route path="/recipes/:seasonId" element={<CatalogRecipes />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            </Routes>

            <CatalogRecipes />

            {/* <CreateRecipe></CreateRecipe> */}
            {/* <EditRecipe></EditRecipe> */}
            {/* <RecipeDetails></RecipeDetails> */}

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
