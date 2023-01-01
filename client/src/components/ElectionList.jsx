import React from "react";
import Election from "./Election";

function ElectionList({ elections }) {
    return(
        <div className="card-grid">
            {elections.map((election)=>{
                return(<Election election={election} key={election.key} />);
            })}
        </div>
    );
}

export default ElectionList;