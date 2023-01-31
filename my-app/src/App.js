import './App.css';

import Navigation from "./Components/common/Navigation/Navigation.js";
import HomePage from "./Components/Home/HomePage.js";
import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register.js";
import Profile from "./Components/Profile/Profile.js";
import CatalogArticles from "./Components/CatalogeArticles/CatalogArticles.js";
import CatalogRecipes from "./Components/CatalogRecipes/CatalogRecipes.js";
import ArticleDetails from "./Components/ArticleDetails/ArticleDetails.js";
import { Footer } from "./Components/common/Footer/Footer.js"
import { Favorites } from './Components/Favorites/Favorites.js';
import { ArticleCategories } from './Components/ArticleCategories/ArticleCategories.js';
import { CreateArticle } from './Components/CreateArticle/CreateArticle.js';
import { EditArtice } from './Components/EditArticle/EditArticle.js';
import { CreateRecipe } from './Components/CreateRecipe/CreateRecipe.js';

function App() {
    return (
        <div className="App">
            {/* <Navigation /> */}

            {/* <HomePage></HomePage> */}
            {/* <Favorites></Favorites> */}

            {/* <Profile /> */}
            {/* <Register/> */}
            {/* <Login /> */}

            {/* <CatalogRecipes/> */}
            <CreateRecipe></CreateRecipe>

            {/* <CatalogArticles /> */}
            {/* <ArticleCategories></ArticleCategories> */}

            {/* <ArticleDetails /> */}
            {/* <CreateArticle></CreateArticle> */}
            {/* <EditArtice></EditArtice> */}

            {/* <Footer></Footer> */}
        </div>

    );
}

export default App;
