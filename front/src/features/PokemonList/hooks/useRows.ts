import useSWR from "swr";
import type { Row } from "../types/row";

interface Returns {
  data: Row[] | undefined;
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

async function rowFetcher(id: number): Promise<Row> {
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const speciesResult = await fetch(speciesUrl);
  const species = await speciesResult.json();
  const pokemonResult = await fetch(pokemonUrl);
  const pokemon = await pokemonResult.json();

  return {
    id: species.id,
    name: getJapaneseName(species.names),
    image: pokemon.sprites.versions["generation-vii"].icons.front_default,
  };
}

async function fetcher(): Promise<Row[]> {
  const length = 10;
  const promises: Promise<Row>[] = [];

  for (let id = 1; id <= length; id++) {
    promises.push(rowFetcher(id));
  }

  const rows = await Promise.all(promises);

  return rows;
}

export function useRows(): Returns {
  const { data, error, isLoading } = useSWR<Row[], Error, string>(
    "data",
    fetcher,
  );

  return { data, error, isLoading };
}
