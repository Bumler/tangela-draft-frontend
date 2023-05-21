import React from 'react';

const PokemonDraftContext = React.createContext();

export function PokemonDraftProvider({ children }) {   
    const [availableDraftMons, setAvailableDraftMons] = React.useState([]);
    const [highlightedMon, setHighlightedMon] = React.useState("");
    const [isDataLoading, setIsDataLoading] = React.useState(false);
    const [isDataLoaded, setIsDataLoaded] = React.useState(false);
    const [selectedTrainerId, setSelectedTrainerId] = React.useState("");

    return (
        <PokemonDraftContext.Provider value={{ availableDraftMons, setAvailableDraftMons, 
        highlightedMon, setHighlightedMon,
        isDataLoading, setIsDataLoading,
        isDataLoaded, setIsDataLoaded,
        selectedTrainerId, setSelectedTrainerId }}>
            {children}
        </PokemonDraftContext.Provider>
    )
}

export default PokemonDraftContext;