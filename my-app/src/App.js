import Navigation from "./Components/Navigation/Navigation.js";
import HomePage from "./Components/Home/HomePage.js";
import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register.js";
import Profile from "./Components/Profile/Profile.js";
import CatalogArticles from "./Components/CatalogeArticles/CatalogeArticles.js";

function App() {
    return (
        <div className="App">
            <Navigation />

            {/* <Login /> */}

            {/* <Profile /> */}

            {/* <Register/> */}

            <CatalogArticles />

        </div>

    );
}

export default App;
