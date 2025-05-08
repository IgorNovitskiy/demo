import { useQuery } from '@tanstack/react-query';

import { DrinksDto } from '../../../constants/dto';
import { Drink } from '../../../constants/models';

const STALE_TIME = 300000; // 5 minutes

const mapDrinks = (data: DrinksDto): Drink[] =>
  data.drinks.map(drink => ({
    ...drink,
    ingredientList: Object.keys(drink)
      .filter(key => key.startsWith('strIngredient'))
      .map((key, index) => {
        const measureKey = `strMeasure${index + 1}` as const;
        return {
          ingredient: drink[key as `strIngredient${number}`] as string,
          measure: drink[measureKey] as string,
        };
      })
      .filter(item => item.ingredient),
  }));

export const useGetCocktail = (code: string) => {
  const { error, data, isFetching } = useQuery({
    queryKey: [code],
    staleTime: STALE_TIME,
    retry: 0,
    queryFn: async (): Promise<Drink[]> => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`);

      return await response.json().then((data: DrinksDto) => mapDrinks(data));
    },
  });

  return { error, data, isFetching };
};
