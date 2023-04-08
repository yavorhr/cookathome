import './App.css';

import { useFetch } from '../src/hooks/useFetch.js';
import { Routes, Route } from 'react-router-dom';

import { RecipeProvider } from './context/RecipeContext.js';
import { AuthProvider } from './context/AuthContext.js';
import { HomePage } from "./Components/Home/HomePage.js";
import { Login } from "./Components/Login/Login.js";
import { Register } from "./Components/Register/Register.js";
import { Profile } from "./Components/Profile/Profile.js";
import { CatalogRecipes } from './Components/CatalogRecipes/CatalogRecipes.js';
import { Favorites } from './Components/Favorites/Favorites.js';
import { CreateRecipe } from './Components/CreateRecipe/CreateRecipe.js';
import { EditRecipe } from './Components/EditRecipe/EditRecipe.js';
import { RecipeDetails } from './Components/DetailsRecipe/RecipeDetails.js';
import { GroceryList } from './Components/GroceryList/GroceryList.js';
import { Footer } from "./Components/common/Footer/Footer.js";
import { Navbar } from './Components/common/Navigation/Navbar/Navbar.js';
import { Search } from './Components/Search/Search.js';
import { Logout } from './Components/Logout/Logout.js';

import { ArticleCategories } from './Components/ArticleCategories/ArticleCategories.js';
import { CreateArticle } from './Components/CreateArticle/CreateArticle.js';
import { EditArtice } from './Components/EditArticle/EditArticle.js';
import { ArticleDetails } from "./Components/ArticleDetails/ArticleDetails.js";
import { CatalogArticles } from "./Components/CatalogeArticles/CatalogArticles.js";


function App() {
    const [articles, setArticles] = useFetch("http://localhost:3030/data/articles", []);

    return (
        <AuthProvider>
            <div className="App">
                <Navbar />
                <RecipeProvider>
                    <Routes>
                        <Route path="/" element={<HomePage articles={articles} />} />
                        <Route path="/users/login" element={<Login />} />
                        <Route path="/users/register" element={<Register />} />
                        <Route path="/users/profile" element={<Profile />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/groecery-list" element={<GroceryList />} />
                        <Route path="/recipes/:season" element={<CatalogRecipes />} />
                        <Route path="/details/:recipeId" element={<RecipeDetails />} />
                        <Route path="/edit/:recipeId" element={<EditRecipe />} />
                        <Route path="/recipes/:category/:type" element={<CatalogRecipes />} />
                        <Route path="/create/recipe" element={<CreateRecipe />} />
                        <Route path="/recipes/search" element={<Search />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </RecipeProvider>

                {/* <CatalogArticles />
            <ArticleCategories></ArticleCategories> */}
                {/* <ArticleDetails /> */}
                {/* <CreateArticle></CreateArticle> */}
                {/* <EditArtice></EditArtice> */}

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
