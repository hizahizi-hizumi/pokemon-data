import type { PokemonResponse } from "@/types/PokemonResponse";

export function getImage(pokemon: PokemonResponse): string {
  const icon = pokemon.sprites.versions["generation-viii"].icons.front_default;

  if (icon) {
    return icon;
  }

  return pokemon.sprites.front_default;
}
