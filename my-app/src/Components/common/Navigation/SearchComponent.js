

import { useState } from "react";
import { ReactComponent as Search } from './svg/search.svg';

export const SearchComponent = () => {
    const [clicked, setClicked] = useState(false);
   
     const setClickHandler = () =>{
        setClicked(!clicked)
    }

    return (
        <div className="search-comp">
            {clicked &&  <form action="">
                <input type="text" />
            </form>}

            <div className='nav-item-wrapper'>
                <li className="nav-item">
                    <a href="#" className="icon-button" onClick={() => setClickHandler()} >
                        <Search />
                    </a>
                </li>

            </div>
        </div>);
}