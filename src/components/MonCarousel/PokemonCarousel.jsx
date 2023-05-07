import React from "react";
import Slider from "react-slick";
import PokemonCard from "../MonDraftCard/PokemonCard";

const PokemonCarousel = ({ pokemonData }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      cssEase: "linear",
    };

    return (
      <Slider {...settings}>
        {pokemonData.map((data) => (
          <PokemonCard key={data.name} props={data} />
        ))}
      </Slider>
    );
  };

export default PokemonCarousel;