import React, { useState } from 'react';
import Trainer from './Trainer';
import PokemonDraftContext from '../../context/PokemonDraftContext';

const TrainerBar = () => {
  const [trainers, setTrainers] = useState(Array(8).fill(false));
  const {setSelectedTrainerId} = React.useContext(PokemonDraftContext);
  const trainerColors = ['blue', 'red', 'green', 'orange', 'purple', 'pink', 'teal', 'grey']

  const handleTrainerClick = (index) => {
    setTrainers((prevTrainers) => {
      const updatedTrainers = Array(8).fill(false);
      updatedTrainers[index] = true;
      setSelectedTrainerId(trainerColors[index])
      return updatedTrainers;
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: "1rem 1rem 0 1rem",
        maxWidth: '100%',
        flexWrap: 'wrap',
      }}
    >
      {trainers.map((isClicked, index) => (
        <Trainer
          key={index}
          color={trainerColors[index]}
          isClicked={isClicked}
          onClick={() => handleTrainerClick(index)}
        />
      ))}
    </div>
  );
};

export default TrainerBar;
