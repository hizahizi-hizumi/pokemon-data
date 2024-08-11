export interface SpeciesResponse {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: EggGroup[];
  evolution_chain: EvolutionChain;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  evolves_from_species: any;
  flavor_text_entries: FlavorTextEntry[];
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: Generation;
  growth_rate: GrowthRate;
  habitat: Habitat;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: Shape;
  varieties: Variety[];
}

interface Color {
  name: string;
  url: string;
}

interface EggGroup {
  name: string;
  url: string;
}

interface EvolutionChain {
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

interface Language {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface Genera {
  genus: string;
  language: Language;
}

interface Generation {
  name: string;
  url: string;
}

interface GrowthRate {
  name: string;
  url: string;
}

interface Habitat {
  name: string;
  url: string;
}

interface Name {
  language: Language;
  name: string;
}

interface PalParkEncounter {
  area: Area;
  base_score: number;
  rate: number;
}

interface Area {
  name: string;
  url: string;
}

interface PokedexNumber {
  entry_number: number;
  pokedex: Pokedex;
}

interface Pokedex {
  name: string;
  url: string;
}

interface Shape {
  name: string;
  url: string;
}

interface Variety {
  is_default: boolean;
  pokemon: Pokemon;
}

interface Pokemon {
  name: string;
  url: string;
}
