import type { Stat } from "./stat";
import type { Type } from "./type";

export interface PokemonResponse {
  abilities: AbilityOverview[];
  base_experience: number;
  cries: Cries;
  forms: Form[];
  game_indices: Index[];
  height: number;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveWithVersionGroupDetails[];
  name: string;
  order: number;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  past_abilities: any[];
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: StatOverview[];
  types: TypeOverview[];
  weight: number;
}

interface AbilityOverview {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface Form {
  name: string;
  url: string;
}

interface Index {
  game_index: number;
  version: Version;
}

interface Version {
  name: string;
  url: string;
}

interface MoveWithVersionGroupDetails {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

interface Move {
  name: string;
  url: string;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_female: any;
  back_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_shiny_female: any;
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
  other: Other;
  versions: Versions;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
  showdown: Showdown;
}

interface DreamWorld {
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
}

interface Home {
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Showdown {
  back_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_female: any;
  back_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_shiny_female: any;
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": GenerationVi;
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

interface GenerationI {
  "red-blue": RedBlue;
  yellow: Yellow;
}

interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface Yellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface GenerationIii {
  emerald: Emerald;
  "firered-leafgreen": FireredLeafgreen;
  "ruby-sapphire": RubySapphire;
}

interface Emerald {
  front_default: string;
  front_shiny: string;
}

interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface GenerationIv {
  "diamond-pearl": DiamondPearl;
  "heartgold-soulsilver": HeartgoldSoulsilver;
  platinum: Platinum;
}

interface DiamondPearl {
  back_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_female: any;
  back_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_shiny_female: any;
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface HeartgoldSoulsilver {
  back_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_female: any;
  back_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_shiny_female: any;
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface Platinum {
  back_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_female: any;
  back_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_shiny_female: any;
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface GenerationV {
  "black-white": BlackWhite;
}

interface BlackWhite {
  animated: Animated;
  back_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_female: any;
  back_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_shiny_female: any;
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface Animated {
  back_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_female: any;
  back_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  back_shiny_female: any;
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface GenerationVi {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire;
  "x-y": XY;
}

interface OmegarubyAlphasapphire {
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface XY {
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface GenerationVii {
  icons: Icons;
  "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

interface Icons {
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
}

interface UltraSunUltraMoon {
  front_default: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_female: any;
  front_shiny: string;
  // biome-ignore lint/suspicious/noExplicitAny: レスポンスの解析が大変なので無視
  front_shiny_female: any;
}

interface GenerationViii {
  icons: Icons;
}

interface StatOverview {
  base_stat: number;
  effort: number;
  stat: StatWithUrl;
}

interface StatWithUrl {
  name: Stat;
  url: string;
}

interface TypeOverview {
  slot: number;
  type: TypeWithUrl;
}

interface TypeWithUrl {
  name: Type;
  url: string;
}
