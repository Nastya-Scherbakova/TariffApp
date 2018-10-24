import { Speed } from "./speed.model";

export interface Tariff {
  name: string;
  speed: Speed;
  benefits: Array<string>;
  cost: number;
}

