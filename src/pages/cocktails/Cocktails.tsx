import { FC, memo } from 'react';

import { CocktailItem } from './components/cocktail-item';

import { useGetCocktail } from './hooks/useGetCocktail';

import classes from './cocktails.module.scss';
import { Loader } from '../../components/loader';

type CocktailsProps = {
  code: string;
};

const Cocktails: FC<CocktailsProps> = ({ code }) => {
  const { data, isFetching, error } = useGetCocktail(code);

  if (error) {
    return (
      <div className={classes.placeholder}>
        <h2>Something went wrong, please try again later</h2>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className={classes.placeholder}>
        <Loader />
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className={classes.placeholder}>
        <h2>No available drinks in this category</h2>
      </div>
    );
  }

  return (
    <div className={classes.content}>
      {data.map(drink => (
        <CocktailItem key={drink.idDrink} {...drink} />
      ))}
    </div>
  );
};

export default memo(Cocktails);
