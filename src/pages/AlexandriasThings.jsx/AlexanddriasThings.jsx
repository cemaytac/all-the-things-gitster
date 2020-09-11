import React from 'react';
import Thing from '../../components/Thing/Thing'

const AlexandriasThings = (props) => {
  return (
    <>
      <h1>Alexandria's Things</h1>
      {props.alexandriasThings.map((thing, idx) =>
        <Thing
          key={idx}
          thing={thing}
        />
      )}

    </>
  );
}

export default AlexandriasThings;