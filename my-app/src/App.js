import './App.css';

import Navigation from "./Components/Navigation/Navigation.js";
import HomePage from "./Components/Home/HomePage.js";
import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register.js";
import Profile from "./Components/Profile/Profile.js";
import CatalogArticles from "./Components/CatalogeArticles/CatalogArticles.js";
import CatalogRecipes from "./Components/CatalogRecipes/CatalogRecipes.js";
import ArticleDetails from "./Components/ArticleDetails/ArticleDetails.js";
import { Footer } from "./Components/Footer/Footer.js";

function App() {
    return (
        <div className="App">
            <Navigation />

            {/* <ArticleDetails /> */}

            {/* <HomePage></HomePage> */}

            {/* <Login /> */}

            {/* <CatalogArticles /> */}

            {/* <Profile /> */}

            {/* <Register/> */}

            <CatalogRecipes/>

            {/* <Footer></Footer> */}
        </div>

    );
}

export default App;
