import type { Row } from "@/features/PokemonList/types/row";
import type { PokemonResponse } from "@/types/PokemonResponse";
import type { SpeciesResponse } from "@/types/SpeciesResponse";
import { getImage } from "./getImage";
import { getJapaneseName } from "./getJapaneseName";
import { getStats } from "./getStats";

export function responseToRow(
  species: SpeciesResponse,
  pokemon: PokemonResponse,
): Row {
  return {
    id: species.id,
    name: getJapaneseName(species.names),
    image: getImage(pokemon),
    types: pokemon.types.map((type) => type.type.name),
    ...getStats(pokemon),
  };
}
