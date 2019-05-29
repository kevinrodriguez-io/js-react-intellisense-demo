import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { centerBlock, mt1, height100vh } from '../ui/styles';
import { Grid, GridRow, Loader, Segment, Dimmer } from 'semantic-ui-react';

export default () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await fetch('https://raw.githubusercontent.com/biuni/pokemongo-pokedex/master/pokedex.json');
    const json = await response.json();
    setPokemons(json.pokemon);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);


  if (pokemons.length === 0) {
    return (
      <Segment style={height100vh}>
        <Dimmer active>
          <Loader size='small'>Loading</Loader>
        </Dimmer>
      </Segment>
    );
  }

  return (
    <Grid relaxed padded>
      <GridRow>
        {pokemons.map(pokemon =>
          <PokemonCard
            style={{ ...centerBlock, ...mt1 }}
            name={pokemon.name}
            types={pokemon.type}
            photoUrl={pokemon.img}
          />)
        }
      </GridRow>
    </Grid>
  );
};
