import React from "react";

function Search({handleFilter, filter}){
    return(
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" onChange={handleFilter} value={filter}/>
        </div>
    )
}

export default Search;