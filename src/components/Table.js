import React, {useState, useEffect, useRef} from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
const axios = require('axios').default;

  
function Table({filter}){
    const [robots, setRobots] = useState([]);
    const [order, setOrder] = useState("");
    const [batteryIcon, setBatteryIcon] = useState("bi bi-arrow-down-up me-2");
    const [yIcon, setYIcon] = useState("bi bi-arrow-down-up me-2");
    const [xIcon, setXIcon] = useState("bi bi-arrow-down-up me-2");
    const url = process.env.REACT_APP_API_URL
    const previousRobots = useRef([])

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await axios.get(url)
  
                if(response)
                {
                    setRobots(response.data)
                    previousRobots.current = response.data;
                    setOrder("default")
                }
            } catch(err){
                console.log(err)
            }
        }
  
        fetchData();
    }, [url])

   
    const handleSort = (columnName) => {
        let sortedRobots = [];
        if(columnName === "batteryLevel"){
            if(order === "default"){
                sortedRobots = [...robots].sort((a, b) => {
                    if (a[columnName] < b[columnName]) {
                        return -1;
                    }
                    if (a[columnName] > b[columnName]) {
                        return 1;
                    }
                    return 0;
                    });
                    setOrder("asc")
                    setRobots(sortedRobots);
                    setBatteryIcon("bi bi-arrow-up me-2")
            } else if(order === "asc"){
                sortedRobots = [...robots].sort((a, b) => {
                    if (a[columnName] < b[columnName]) {
                        return 1;
                    }
                    if (a[columnName] > b[columnName]) {
                        return -1;
                    }
                    return 0;
                    });
                    setOrder("desc")
                    setRobots(sortedRobots);
                    setBatteryIcon("bi bi-arrow-down me-2")
            } else if(order === "desc"){
                setOrder("default")
                setRobots(previousRobots.current);
                setBatteryIcon("bi bi-arrow-down-up me-2")
            }
        } else if(columnName === "y"){
            if(order === "default"){
                sortedRobots = [...robots].sort((a, b) => {
                    if (a[columnName] < b[columnName]) {
                        return -1;
                    }
                    if (a[columnName] > b[columnName]) {
                        return 1;
                    }
                    return 0;
                    });
                    setOrder("asc")
                    setRobots(sortedRobots);
                    setYIcon("bi bi-arrow-up me-2")
            } else if(order === "asc"){
                sortedRobots = [...robots].sort((a, b) => {
                    if (a[columnName] < b[columnName]) {
                        return 1;
                    }
                    if (a[columnName] > b[columnName]) {
                        return -1;
                    }
                    return 0;
                    });
                    setOrder("desc")
                    setRobots(sortedRobots);
                    setYIcon("bi bi-arrow-down me-2")
            } else if(order === "desc"){
                setOrder("default")
                setRobots(previousRobots.current);
                setYIcon("bi bi-arrow-down-up me-2")
            }
        } else if(columnName === "x"){
            if(order === "default"){
                sortedRobots = [...robots].sort((a, b) => {
                    if (a[columnName] < b[columnName]) {
                        return -1;
                    }
                    if (a[columnName] > b[columnName]) {
                        return 1;
                    }
                    return 0;
                    });
                    setOrder("asc")
                    setRobots(sortedRobots);
                    setXIcon("bi bi-arrow-up me-2")
            } else if(order === "asc"){
                sortedRobots = [...robots].sort((a, b) => {
                    if (a[columnName] < b[columnName]) {
                        return 1;
                    }
                    if (a[columnName] > b[columnName]) {
                        return -1;
                    }
                    return 0;
                    });
                    setOrder("desc")
                    setRobots(sortedRobots);
                    setXIcon("bi bi-arrow-down me-2")
            } else if(order === "desc"){

                setOrder("default")
                setRobots(previousRobots.current);
                setXIcon("bi bi-arrow-down-up me-2")
            }
        }
    }

            
    return(
        <>
            <div className="table-wrapper">
                <table className="table table-striped table-responsive rounded" data-testid="table">
                    <TableHead handleSort={handleSort} batteryIcon={batteryIcon} yIcon={yIcon} xIcon={xIcon}/>
                    <TableBody robots={robots} filter={filter}/>
                </table>
            </div>            
        </>
    )
}
  export default Table;