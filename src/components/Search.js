import React from "react";


function Search({handleFilter, filter}){
    return(
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search by Id" onChange={handleFilter} value={filter}/>
        </div>
    )
}

export default Search;