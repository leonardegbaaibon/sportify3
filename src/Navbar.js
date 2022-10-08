import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import logo from "./Logo3.png";

const Navbar = (props) => {
  console.log(props);
  const inputEl = useRef("")

  const getSearchItem = () => {
    props.searchKeyword(inputEl.current.value)
    console.log(inputEl.current.value)
  }
  const searchClick = () => {

  }

  return (
    <div class="header1">
        <div className="logo-diver">
           <img src={logo} alt="" className="logo-div" />
        </div>
      <div class="search-div">
        <input
        ref={inputEl}
          type="text"
          id="search"
          required
          placeholder="Search by club name ..."
          value={props.items}
          onChange={getSearchItem}

        />
        <div class="icon-btn" onClick={searchClick}>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
