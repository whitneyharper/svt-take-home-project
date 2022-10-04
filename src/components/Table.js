import React, {useState, useEffect, useRef} from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
const axios = require('axios').default;

  
function Table({filter}){
    const [robots, setRobots] = useState([]);
    const [order, setOrder] = useState("");
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
        } else if(order === "desc"){
            setOrder("default")
            setRobots(previousRobots.current);
        }
      }

    return(
        <>
            <table className="table">
                <TableHead handleSort={handleSort} order={order}/>
                <TableBody robots={robots} filter={filter}/>
            </table>
        </>
    )
}
  export default Table;