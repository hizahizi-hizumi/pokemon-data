import type { Name } from "@/types/SpeciesResponse";

export function getJapaneseName(names: Name[]): string {
  const japaneseName = names.find((name) => name.language.name === "ja");

  return japaneseName ? japaneseName.name : "";
}
