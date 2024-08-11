import type { PokemonResponse } from "@/types/PokemonResponse";

interface Return {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
}

export function getStats(pokemon: PokemonResponse): Return {
  return {
    hp: pokemon.stats.find((stat) => stat.stat.name === "hp")?.base_stat ?? 0,
    attack:
      pokemon.stats.find((stat) => stat.stat.name === "attack")?.base_stat ?? 0,
    defense:
      pokemon.stats.find((stat) => stat.stat.name === "defense")?.base_stat ??
      0,
    speed:
      pokemon.stats.find((stat) => stat.stat.name === "speed")?.base_stat ?? 0,
    specialAttack:
      pokemon.stats.find((stat) => stat.stat.name === "special-attack")
        ?.base_stat ?? 0,
    specialDefense:
      pokemon.stats.find((stat) => stat.stat.name === "special-defense")
        ?.base_stat ?? 0,
  };
}
