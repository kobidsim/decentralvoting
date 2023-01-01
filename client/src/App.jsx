import React, { useState } from "react";
import { EthProvider } from "./contexts/EthContext";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar";
import ElectionList from "./components/ElectionList";
import ElectionPage from "./ElectionPage";
import CreateElection from "./components/CreateElection";
import "./App.css";

const SAMPLE_DATA = [{
                        "id": "1",
                        "name": "Election A",
                        "admin": "A",
                        "about": "hello this is election 1"
                      },
                      {
                        "id": "2",
                        "name": "Election B",
                        "admin": "B",
                        "about": "hello this is election 2"
                      },
                      {
                        "id": "3",
                        "name": "Election C",
                        "admin": "C",
                        "about": "hello this is election 3"
                      }
];

function App() {
  const [elections, setElections] = useState(SAMPLE_DATA);

  return (
    <EthProvider>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ElectionList elections={elections} />} />
          <Route path="create" element={<CreateElection />} />
          {elections.map((election) => {
            return(<Route path={"/election/"+election.id} element={<ElectionPage election={election} />} />);
          })}
        </Routes>
      </div>
      
    </EthProvider>
  );
}

export default App;
