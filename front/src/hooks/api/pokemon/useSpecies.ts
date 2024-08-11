import { useGet } from "@/hooks/api/base/useGet";
import type { SpeciesResponse } from "@/types/SpeciesResponse";
import { ENDPOINT_BASE } from "./endpoint_base";

const ENDPOINT = `${ENDPOINT_BASE}/pokemon-species`;

interface Returns {
  data: SpeciesResponse | undefined;
  error: Error | undefined;
  isLoading: boolean;
}

export function useSpecies(id: number): Returns {
  const url = `${ENDPOINT}/${id}`;

  const { data, error, isLoading } = useGet<SpeciesResponse>(url);

  return { data, error, isLoading };
}
