import { FaSearch } from "react-icons/fa";

// import { useState } from "react";
// const [search, setSearch] = useState("")

const Navbar = () => {
    return ( 
        <div class="header1">
        <div class="search-div">
            <input type="text" id="search" required placeholder="Search by League...." />
            <div class="icon-btn">
                <FaSearch />
            </div>

        </div>


    </div>
     );
}
 
export default Navbar;