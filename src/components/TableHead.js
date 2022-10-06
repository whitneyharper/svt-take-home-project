import React from "react";

function TableHead({handleSort, batteryIcon, yIcon, xIcon,}) {



   

    return(
        <thead className="text-center sticky-top">
            <tr>
                <th scope="col">ID</th>              
                <th scope="col"><i className={batteryIcon} onClick={() => {handleSort("batteryLevel")}}></i>Battery Level</th>
                <th scope="col"><i className={yIcon} onClick={() => {handleSort("y")}}></i>Y Coordinate</th>
                <th scope="col"><i className={xIcon} onClick={() => handleSort("x")}></i>X Coordinate</th>
            </tr>
        </thead>
    )
};

export default TableHead;
