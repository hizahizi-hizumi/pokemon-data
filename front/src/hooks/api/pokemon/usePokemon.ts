import { useGet } from "@/hooks/api/base/useGet";
import type { PokemonResponse } from "@/types/PokemonResponse";
import { ENDPOINT_BASE } from "./endpoint_base";

const ENDPOINT = `${ENDPOINT_BASE}/pokemon`;

export const usePokemon = (id: number) => {
  const url = `${ENDPOINT}/${id}`;

  const { data, error, isLoading } = useGet<PokemonResponse>(url);

  return { data, error, isLoading };
};
