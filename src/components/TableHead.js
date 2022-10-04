import React from "react";

function TableHead({handleSort}){
    return(
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col"><i className="bi bi-arrow-up" onClick={() => handleSort("batteryLevel")}></i>Battery Level</th>
                <th scope="col"><i className="bi bi-arrow-up" onClick={() => handleSort("y")}></i>Y Coords</th>
                <th scope="col"><i className="bi bi-arrow-up" onClick={() => handleSort("x")}></i>X Coords</th>
            </tr>
        </thead>
    )
};

export default TableHead;
