import React, { useContext, useEffect } from 'react';
import PokemonDraftContext from '../../context/PokemonDraftContext';
import PokemonCarousel from '../../components/MonCarousel/PokemonCarousel';
import PokemonInfo from '../../components/MonInfo/PokemonInfo';
import TrainerBar from '../../components/Trainer/TrainerBar';
import BackspriteCarousel from '../../components/MonCarousel/BackspriteCarousel';
import axios from 'axios';
import DraftButton from '../../components/DraftButton/DraftButton';

function DraftPage() {
    const {setAvailableDraftMons, setHighlightedMon,
        isDataLoaded, setIsDataLoaded,
        isDataLoading, setIsDataLoading} = useContext(PokemonDraftContext);

    useEffect(() => {
        if (isDataLoading || isDataLoaded) {
            return;
        }

        setIsDataLoading(true);
        const endpoint = 'http://localhost:3001/draftPool';
        axios.get(endpoint).then((response) => {
            const updatedData = [];
            const draftPool = response.data;

            for (const pokemon of draftPool) {
                updatedData.push(pokemon);
            }

            setAvailableDraftMons(updatedData);
            setHighlightedMon(updatedData[0]);
            console.log(updatedData);
        });

        setIsDataLoaded(true);
        setIsDataLoading(false);

        // todo this is being called twice, look into later
    }, []); // this is emitting some linter error todo look into later

    return (
        <div>
            <PokemonCarousel tier={["OU", "(OU)"]} />
            <PokemonCarousel tier={["UU", "UUBL"]} />
            <PokemonCarousel tier={["NU", "NUBL"]} /> 
            <TrainerBar />
            <PokemonInfo />
            <BackspriteCarousel />
            <DraftButton />
        </div>
    );
}

export default DraftPage;
