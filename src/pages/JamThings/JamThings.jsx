import React from 'react'
import Thing from '../../components/Thing/Thing

const JamThings = (props) => {
  return ( 
    <>
      <h2>Jam-Jam's Things</h2>
      {props.jamThings.map((thing, idx) => 
        <Thing 
          key={idx}
          thing={thing}
        />
      )}
    </>
   );
}
 
export default JamThings;