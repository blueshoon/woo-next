import React from 'react';


const SalesAgent = (props) => {

  const { agents } = props;

  return(
      <div className="form-check">
        <h2>SalesAgent</h2>
        { agents.length ? (
          agents.map( agent => (
            <div key={agent.databaseId}>
              <input className="form-check-input" type="radio" name="salesAgents" value={agent.databaseId} />
              <label className="form-check-label">{ agent.email }</label>
            </div>
          ) )
        ) : '' }
      </div>
  )  
}

export default SalesAgent;