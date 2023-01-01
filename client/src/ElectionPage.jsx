import React from "react";

function ElectionPage({ election }){
    return(
        <>
            <h1>Welcome to {election.name}</h1>
            <h5>Admin: {election.admin}</h5>
            <p>{election.about}</p>

        </>
    );
}

export default ElectionPage;