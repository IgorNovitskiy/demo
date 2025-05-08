import { FC, memo } from 'react';

import { CocktailItem } from './components/cocktail-item';

import { useGetCocktail } from './hooks/useGetCocktail';

import classes from './cocktails.module.scss';

type CocktailsProps = {
  code: string;
};

const Cocktails: FC<CocktailsProps> = ({ code }) => {
  const { data, isFetching } = useGetCocktail(code);

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (!data?.length) {
    return <div>No available drinks in this category</div>;
  }

  return (
    <div className={classes.content}>
      {data.map((drink) => <CocktailItem {...drink} />)}
    </div>
  );
};

export default memo(Cocktails);
