import React, {useState, useEffect} from "react";
const axios = require('axios').default;
// import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const url = process.env.REACT_APP_API_URL

  useEffect(()=>{
      const fetchData = async() => {
          try{
              const response = await axios.get(url)

              console.log(response.data)
              if(response)
              {
                  setRobots(response.data)
              }
          } catch(err){
              console.log(err)
          }
      }

      fetchData();
  }, [url])

  return (
    <div class="container">
      <div class="row border">
        <div class="col-12">
            <div class="input-group mb-3">
                <input type="text" class="form-control"/>
            </div>
        </div>
        <div class="col-12">
          <table class="table">
              <thead>
                  <tr>
                  <th scope="col">ID</th>
                  <th>Name</th>
                  <th scope="col"><i class="bi bi-arrow-up"></i>Battery Level</th>
                  <th scope="col"><i class="bi bi-arrow-up"></i>Y Coords</th>
                  <th scope="col"><i class="bi bi-arrow-up"></i>X Coords</th>
                  </tr>
              </thead>
              <tbody class="table-group-divider">
                {robots.map((robot) => {
                      return (
                          
                        <tr key={robot.robotId}>
                            <td>{robot.robotId}</td>
                            <td>Robot #{robot.robotId}</td>
                            <td>{robot.batteryLevel}</td>
                            <td>{robot.y}</td>
                            <td>{robot.x}</td>
                        </tr>
                          
                      )
                  })}
              </tbody> 
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
