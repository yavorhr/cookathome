import HomePage from "./Components/Home/HomePage.js";
import Login from "./Components/Login/Login.js";
import Profile from "./Components/Profile/Profile.js";
import Navigation from "./Components/Navigation/Navigation.js";

function App() {
    return (
        <div className="App">
            <Navigation />
        
            {/* <Login /> */}

            <Profile />
        </div>

    );
}

export default App;
