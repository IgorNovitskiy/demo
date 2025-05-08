export type DrinkItemDto = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;

  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
};

export type DrinksDto = {
  drinks: DrinkItemDto[];
};
