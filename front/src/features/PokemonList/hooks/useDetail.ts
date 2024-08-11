import { usePokemon } from "@/hooks/api/pokemon/usePokemon";
import { useSpecies } from "@/hooks/api/pokemon/useSpecies";
import type { PokemonResponse } from "@/types/PokemonResponse";
import type { SpeciesResponse } from "@/types/SpeciesResponse";

interface Args {
  id: number;
}

type Detail = {
  id: number;
  name: string;
  image: string;
};

interface Returns {
  detail: Detail | undefined;
  error: Error | undefined;
  isLoading: boolean;
}

interface Language {
  name: string;
  url: string;
}

interface Name {
  language: Language;
  name: string;
}

function getJapaneseName(names: Name[]): string {
  const japaneseName = names.find((name) => name.language.name === "ja");

  return japaneseName ? japaneseName.name : "";
}

function getDetailFromResponse(
  species: SpeciesResponse,
  pokemon: PokemonResponse,
): Detail {
  return {
    id: species.id,
    name: getJapaneseName(species.names),
    image: pokemon.sprites.front_default,
  };
}

export function useDetail(args: Args): Returns {
  const { id } = args;

  const {
    data: speciesData,
    error: speciesError,
    isLoading: speciesIsLoading,
  } = useSpecies(id);

  const {
    data: pokemonData,
    error: pokemonError,
    isLoading: pokemonIsLoading,
  } = usePokemon(id);

  const error = speciesError || pokemonError;
  const isLoading = speciesIsLoading || pokemonIsLoading;

  const detail =
    speciesData && pokemonData
      ? getDetailFromResponse(speciesData, pokemonData)
      : undefined;

  return { detail, error, isLoading };
}
