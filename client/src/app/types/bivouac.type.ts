import { LatLngExpression } from "leaflet";
import { NonNull } from "./misc.type";

export type BivouacType =
  | "managed"
  | "require-keys"
  | "private"
  | "open"
  | "out-of-lombardy"
  | "incomplete"
  | "abandoned";

export type BivouacMaterial = "stone" | "wood" | "metal" | "rock";

export type CostPer = "hour" | "day" | "week" | "month" | "forever";

export type Currency = "EUR" | "USD";

export interface StartingSpot {
  description?: string;
  timeToDestination?: number;
  transport?: {
    car?: {
      description?: string;
      cost?: {
        value: number;
        currency: Currency;
        per: CostPer;
      };
    };
    public?: {
      name: string;
      description?: string;
      cost?: {
        value: number;
        currency: Currency;
      };
    }[];
  };
  latLng: LatLngExpression;
}

// Allowing nulls because we cannot send undefined values through jsons.
// Null means we want to delete the field. Undefined or key not present
// means the field will not be sent.
export interface NewBivouac {
  name: string;
  description?: string | null;
  imageName?: string | null;
  material?: BivouacMaterial | null;
  type?: BivouacType | null;
  latLng?: LatLngExpression | null;
  externalLinks?: string[] | null;
  startingSpots?: StartingSpot[];
}

export interface Bivouac extends NonNull<NewBivouac> {
  _id: string;
  imageUrl?: string;
  favoritesCount?: number;
}

export const bivouacTypes: BivouacType[] = [
  "managed",
  "require-keys",
  "private",
  "open",
  "out-of-lombardy",
  "incomplete",
  "abandoned",
];

export const bivouacMaterials: BivouacMaterial[] = [
  "metal",
  "stone",
  "wood",
  "rock",
];
