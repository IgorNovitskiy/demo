import { FC, memo } from 'react';

type CocktailProps = {
  code: string;
}

const Cocktail: FC<CocktailProps> = ({ code }) => {
  return <div>Content { code }</div>;
};

export default memo(Cocktail);
