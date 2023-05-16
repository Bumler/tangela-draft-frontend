import React from 'react';

const PokemonDraftContext = React.createContext();

export function PokemonDraftProvider({ children }) {   
    const [availableDraftMons, setAvailableDraftMons] = React.useState([]);
    const [highlightedMon, setHighlightedMon] = React.useState("");

    return (
        <PokemonDraftContext.Provider value={{ availableDraftMons, setAvailableDraftMons, 
        highlightedMon, setHighlightedMon }}>
            {children}
        </PokemonDraftContext.Provider>
    )
}

export default PokemonDraftContext;