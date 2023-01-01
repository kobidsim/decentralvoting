import React from "react";
import "./Election.css";
import { Link } from 'react-router-dom';

function Election({ election }){
    return(
        
        <Link to={"/election/"+election.id}>
            <div className="card">
                <h3>{election.name}</h3>
                    <div class="container">
                        <h4><b>{election.admin}</b></h4>
                        <p>{election.about}</p>
                    </div>
            </div>
        </Link>
    );
}

export default Election;