import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHatWizard } from '@fortawesome/free-solid-svg-icons';

const Trainer = ({ color, isClicked, onClick }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faUser} size="2x" color={color} />
        {isClicked && (
          <div>
            <FontAwesomeIcon style={{ position: 'absolute', top: '-28px', right: '-3px' }}
             icon={faHatWizard} color={color} size="2x" />
          </div>
        )}
      </div>
    );
  };

export default Trainer;
