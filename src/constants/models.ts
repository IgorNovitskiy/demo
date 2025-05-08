import { DrinkItemDto } from './dto';

export type Drink = DrinkItemDto & {
  ingredientList: {
    ingredient: string;
    measure: string;
  }[];
};
