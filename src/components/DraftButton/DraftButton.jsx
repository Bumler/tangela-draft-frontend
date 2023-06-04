import Button from 'react-bootstrap/Button';
import React, { useState, useContext } from 'react';
import PokemonDraftContext from '../../context/PokemonDraftContext';
import Modal from 'react-bootstrap/Modal';
import Trainer from '../Trainer/Trainer';
import './DraftButton.css';
import axios from 'axios';

const DraftButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { availableDraftMons, setAvailableDraftMons, highlightedMon, selectedTrainerId } = useContext(PokemonDraftContext);
    
    const pokemonData = availableDraftMons.find(pokemon => pokemon.name === highlightedMon);

    if (!pokemonData){ 
        return (
            <div></div>
        );
      }

    function onTrainerClick() { } // just eating the click

    function onDraftClick() { 
        console.log("Drafting " + pokemonData.name + " for Trainer " + selectedTrainerId);
        console.log(availableDraftMons)
        const updatedDraftMons = [...availableDraftMons]
        updatedDraftMons.find(pokemon => pokemon.name === highlightedMon).isDrafted = true;
        updatedDraftMons.find(pokemon => pokemon.name === highlightedMon).trainerId = selectedTrainerId;

        setAvailableDraftMons(updatedDraftMons);

        const endpoint = 'http://localhost:3001/draftMon';
        
        const payload = {
            trainerId: selectedTrainerId,
            pokemonName: pokemonData.name
        }
        
        axios.post(endpoint, payload).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });

        handleClose();
    }

    const { name, displayData } = pokemonData;
    const { spriteUrl } = displayData;

    return (
      <>
        <div style= {{padding: "10px 0 5px 0"}}>
            <Button variant="warning" size="lg"
                style={{width: "80%", alignItems: "center"}}
                onClick={handleShow}
                disabled={!selectedTrainerId}
            >{selectedTrainerId.length <= 0 ? ("Select your Trainer to Draft") : ("Draft")}</Button>
        </div>

        <Modal show={show} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
          <Modal.Header closeButton>

            <Modal.Title id="contained-modal-title-vcenter">
                <div style={{ display: "flex", flexDirection: "row" }} >
                    <div style={{ marginRight: "15px"}}>
                        <Trainer        
                            color={selectedTrainerId}
                            isClicked={false}
                            onClick={() => onTrainerClick()}
                        /> 
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>Draft {name}?</div>
                </div>
            </Modal.Title>

          </Modal.Header>
          
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "row" }} >
                
                <img src={spriteUrl} alt={name} className="pokemon-sprite" />
                <div style={{ display: "flex", alignItems: "center", marginLeft: "25px" }}>
                  Confirm that you would like to draft {name}, for Trainer {selectedTrainerId}?
                </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="warning" onClick={onDraftClick}>
              Draft!
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default DraftButton;