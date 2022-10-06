import React, {useState} from "react";
import Search from "./components/Search";
import Table from "./components/Table"
import './App.css';



function App() {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }
  return(
    <>
      <div className="container-fluid mt-5 pb-1 px-3">
        
        <div className="row border-2 banner rounded p-3 mx-auto">         
            <div className="col-xs-12 col-md-6">
              <h2 className="fw-bolder">Robotic Portal</h2>
            </div>
            <div className="col-xs-12 col-md-6">
              <Search handleFilter={handleFilter} filter={filter}/>
            </div>
        </div>
          <Table filter={filter}/>
      </div>
    </>
  )
}

export default App;


