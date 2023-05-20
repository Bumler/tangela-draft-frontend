import React, { useContext, useEffect } from 'react';
import PokemonDraftContext from '../../context/PokemonDraftContext';
import PokemonCarousel from '../../components/MonCarousel/PokemonCarousel';
import PokemonInfo from '../../components/MonInfo/PokemonInfo';
import axios from 'axios';

function DraftPage() {
    const {setAvailableDraftMons, setHighlightedMon,
        isDataLoaded, setIsDataLoaded,
        isDataLoading, setIsDataLoading} = useContext(PokemonDraftContext);

    const stagedData = [
        "{\"name\":\"dragonite\",\"tier\":\"OU\",\"gameData\":{\"type1\":\"dragon\",\"type2\":\"flying\",\"abilities\":[{\"name\":\"inner-focus\",\"description\":\"https://pokeapi.co/api/v2/ability/39/\"},{\"name\":\"multiscale\",\"description\":\"https://pokeapi.co/api/v2/ability/136/\"}],\"stats\":{\"hp\":91,\"attack\":134,\"defense\":95,\"specialAttack\":100,\"specialDefense\":100,\"speed\":80}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/149.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/149.png\"}}",
        "{\"name\":\"latias\",\"tier\":\"OU\",\"gameData\":{\"type1\":\"dragon\",\"type2\":\"psychic\",\"abilities\":[{\"name\":\"levitate\",\"description\":\"https://pokeapi.co/api/v2/ability/26/\"}],\"stats\":{\"hp\":80,\"attack\":80,\"defense\":90,\"specialAttack\":110,\"specialDefense\":130,\"speed\":110}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/380.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/380.png\"}}",
        "{\"name\":\"togekiss\",\"tier\":\"(OU)\",\"gameData\":{\"type1\":\"fairy\",\"type2\":\"flying\",\"abilities\":[{\"name\":\"hustle\",\"description\":\"https://pokeapi.co/api/v2/ability/55/\"},{\"name\":\"serene-grace\",\"description\":\"https://pokeapi.co/api/v2/ability/32/\"},{\"name\":\"super-luck\",\"description\":\"https://pokeapi.co/api/v2/ability/105/\"}],\"stats\":{\"hp\":85,\"attack\":50,\"defense\":95,\"specialAttack\":120,\"specialDefense\":115,\"speed\":80}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/468.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/468.png\"}}",
        "{\"name\":\"scizor\",\"tier\":\"OU\",\"gameData\":{\"type1\":\"bug\",\"type2\":\"steel\",\"abilities\":[{\"name\":\"swarm\",\"description\":\"https://pokeapi.co/api/v2/ability/68/\"},{\"name\":\"technician\",\"description\":\"https://pokeapi.co/api/v2/ability/101/\"},{\"name\":\"light-metal\",\"description\":\"https://pokeapi.co/api/v2/ability/135/\"}],\"stats\":{\"hp\":70,\"attack\":130,\"defense\":100,\"specialAttack\":55,\"specialDefense\":80,\"speed\":65}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/212.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/212.png\"}}",
        "{\"name\":\"empoleon\",\"tier\":\"OU\",\"gameData\":{\"type1\":\"water\",\"type2\":\"steel\",\"abilities\":[{\"name\":\"torrent\",\"description\":\"https://pokeapi.co/api/v2/ability/67/\"},{\"name\":\"defiant\",\"description\":\"https://pokeapi.co/api/v2/ability/128/\"}],\"stats\":{\"hp\":84,\"attack\":86,\"defense\":88,\"specialAttack\":111,\"specialDefense\":101,\"speed\":60}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/395.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/395.png\"}}",
        "{\"name\":\"jirachi\",\"tier\":\"OU\",\"gameData\":{\"type1\":\"steel\",\"type2\":\"psychic\",\"abilities\":[{\"name\":\"serene-grace\",\"description\":\"https://pokeapi.co/api/v2/ability/32/\"}],\"stats\":{\"hp\":100,\"attack\":100,\"defense\":100,\"specialAttack\":100,\"specialDefense\":100,\"speed\":100}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/385.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/385.png\"}}",
        "{\"name\":\"abomasnow\",\"tier\":\"UUBL\",\"gameData\":{\"type1\":\"grass\",\"type2\":\"ice\",\"abilities\":[{\"name\":\"snow-warning\",\"description\":\"https://pokeapi.co/api/v2/ability/117/\"},{\"name\":\"soundproof\",\"description\":\"https://pokeapi.co/api/v2/ability/43/\"}],\"stats\":{\"hp\":90,\"attack\":92,\"defense\":75,\"specialAttack\":92,\"specialDefense\":85,\"speed\":60}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/460.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/460.png\"}}",
        "{\"name\":\"heracross\",\"tier\":\"UUBL\",\"gameData\":{\"type1\":\"bug\",\"type2\":\"fighting\",\"abilities\":[{\"name\":\"swarm\",\"description\":\"https://pokeapi.co/api/v2/ability/68/\"},{\"name\":\"guts\",\"description\":\"https://pokeapi.co/api/v2/ability/62/\"},{\"name\":\"moxie\",\"description\":\"https://pokeapi.co/api/v2/ability/153/\"}],\"stats\":{\"hp\":80,\"attack\":125,\"defense\":75,\"specialAttack\":40,\"specialDefense\":95,\"speed\":85}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/214.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/214.png\"}}",
        "{\"name\":\"scyther\",\"tier\":\"UU\",\"gameData\":{\"type1\":\"bug\",\"type2\":\"flying\",\"abilities\":[{\"name\":\"swarm\",\"description\":\"https://pokeapi.co/api/v2/ability/68/\"},{\"name\":\"technician\",\"description\":\"https://pokeapi.co/api/v2/ability/101/\"},{\"name\":\"steadfast\",\"description\":\"https://pokeapi.co/api/v2/ability/80/\"}],\"stats\":{\"hp\":70,\"attack\":110,\"defense\":80,\"specialAttack\":55,\"specialDefense\":80,\"speed\":105}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/123.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/123.png\"}}",
        "{\"name\":\"clefable\",\"tier\":\"UU\",\"gameData\":{\"type1\":\"fairy\",\"type2\":null,\"abilities\":[{\"name\":\"cute-charm\",\"description\":\"https://pokeapi.co/api/v2/ability/56/\"},{\"name\":\"magic-guard\",\"description\":\"https://pokeapi.co/api/v2/ability/98/\"},{\"name\":\"unaware\",\"description\":\"https://pokeapi.co/api/v2/ability/109/\"}],\"stats\":{\"hp\":95,\"attack\":70,\"defense\":73,\"specialAttack\":95,\"specialDefense\":90,\"speed\":60}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/36.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/36.png\"}}",
        "{\"name\":\"crobat\",\"tier\":\"UUBL\",\"gameData\":{\"type1\":\"poison\",\"type2\":\"flying\",\"abilities\":[{\"name\":\"inner-focus\",\"description\":\"https://pokeapi.co/api/v2/ability/39/\"},{\"name\":\"infiltrator\",\"description\":\"https://pokeapi.co/api/v2/ability/151/\"}],\"stats\":{\"hp\":85,\"attack\":90,\"defense\":80,\"specialAttack\":70,\"specialDefense\":80,\"speed\":130}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/169.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/169.png\"}}",
        "{\"name\":\"tangrowth\",\"tier\":\"UU\",\"gameData\":{\"type1\":\"grass\",\"type2\":null,\"abilities\":[{\"name\":\"chlorophyll\",\"description\":\"https://pokeapi.co/api/v2/ability/34/\"},{\"name\":\"leaf-guard\",\"description\":\"https://pokeapi.co/api/v2/ability/102/\"},{\"name\":\"regenerator\",\"description\":\"https://pokeapi.co/api/v2/ability/144/\"}],\"stats\":{\"hp\":100,\"attack\":100,\"defense\":125,\"specialAttack\":110,\"specialDefense\":50,\"speed\":50}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/465.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/465.png\"}}",
        "{\"name\":\"lapras\",\"tier\":\"NU\",\"gameData\":{\"type1\":\"water\",\"type2\":\"ice\",\"abilities\":[{\"name\":\"water-absorb\",\"description\":\"https://pokeapi.co/api/v2/ability/11/\"},{\"name\":\"shell-armor\",\"description\":\"https://pokeapi.co/api/v2/ability/75/\"},{\"name\":\"hydration\",\"description\":\"https://pokeapi.co/api/v2/ability/93/\"}],\"stats\":{\"hp\":130,\"attack\":85,\"defense\":80,\"specialAttack\":85,\"specialDefense\":95,\"speed\":60}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/131.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/131.png\"}}",
        "{\"name\":\"slaking\",\"tier\":\"NU\",\"gameData\":{\"type1\":\"normal\",\"type2\":null,\"abilities\":[{\"name\":\"truant\",\"description\":\"https://pokeapi.co/api/v2/ability/54/\"}],\"stats\":{\"hp\":150,\"attack\":160,\"defense\":100,\"specialAttack\":95,\"specialDefense\":65,\"speed\":100}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/289.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/289.png\"}}",
        "{\"name\":\"rampardos\",\"tier\":\"NU\",\"gameData\":{\"type1\":\"rock\",\"type2\":null,\"abilities\":[{\"name\":\"mold-breaker\",\"description\":\"https://pokeapi.co/api/v2/ability/104/\"},{\"name\":\"sheer-force\",\"description\":\"https://pokeapi.co/api/v2/ability/125/\"}],\"stats\":{\"hp\":97,\"attack\":165,\"defense\":60,\"specialAttack\":65,\"specialDefense\":50,\"speed\":58}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/409.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/409.png\"}}",
        "{\"name\":\"sandslash\",\"tier\":\"NU\",\"gameData\":{\"type1\":\"ground\",\"type2\":null,\"abilities\":[{\"name\":\"sand-veil\",\"description\":\"https://pokeapi.co/api/v2/ability/8/\"},{\"name\":\"sand-rush\",\"description\":\"https://pokeapi.co/api/v2/ability/146/\"}],\"stats\":{\"hp\":75,\"attack\":100,\"defense\":110,\"specialAttack\":45,\"specialDefense\":55,\"speed\":65}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/28.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/28.png\"}}",
        "{\"name\":\"solrock\",\"tier\":\"NU\",\"gameData\":{\"type1\":\"rock\",\"type2\":\"psychic\",\"abilities\":[{\"name\":\"levitate\",\"description\":\"https://pokeapi.co/api/v2/ability/26/\"}],\"stats\":{\"hp\":90,\"attack\":95,\"defense\":85,\"specialAttack\":55,\"specialDefense\":65,\"speed\":70}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/338.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/338.png\"}}",
        "{\"name\":\"golbat\"  ,\"tier\":\"NU\",\"gameData\":{\"type1\":\"poison\",\"type2\":\"flying\",\"abilities\":[{\"name\":\"inner-focus\",\"description\":\"https://pokeapi.co/api/v2/ability/39/\"},{\"name\":\"infiltrator\",\"description\":\"https://pokeapi.co/api/v2/ability/151/\"}],\"stats\":{\"hp\":75,\"attack\":80,\"defense\":70,\"specialAttack\":65,\"specialDefense\":75,\"speed\":90}},\"displayData\":{\"artUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png\",\"spriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/42.png\",\"backSpriteUrl\":\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/42.png\"}}"
      ]

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
        });

        setIsDataLoaded(true);
        setIsDataLoading(false);

        // todo this is being called twice, look into later
    }, []); // this is emitting some linter error todo look into later

    return (
        <div>
            <PokemonCarousel tier="OU" />
            <PokemonCarousel tier="UU" />
            <PokemonCarousel tier="NU" /> 
            <PokemonInfo />
        </div>
    );
}

export default DraftPage;
