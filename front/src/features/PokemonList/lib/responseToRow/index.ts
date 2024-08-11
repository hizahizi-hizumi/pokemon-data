import type { Row } from "@/features/PokemonList/types/row";
import type { PokemonResponse } from "@/types/PokemonResponse";
import type { SpeciesResponse } from "@/types/SpeciesResponse";
import { getJapaneseName } from "./getJapaneseName";

export function responseToRow(
  species: SpeciesResponse,
  pokemon: PokemonResponse,
): Row {
  return {
    id: species.id,
    name: getJapaneseName(species.names),
    image: pokemon.sprites.versions["generation-vii"].icons.front_default,
    types: pokemon.types.map((type) => type.type.name),
  };
}
