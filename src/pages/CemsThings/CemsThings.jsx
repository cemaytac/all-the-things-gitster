import React from 'react';
import Thing from '../../components/Thing/Thing'

const CemsThings = (props) => {
  return (
    <>
      <h1>Cem's Things</h1>
      {props.cemsThings.map((thing, idx) =>
        <Thing
          key={idx}
          thing={thing}
        />
      )}
    </>
  );
}

export default CemsThings;