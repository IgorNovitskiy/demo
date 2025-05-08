import { FC, memo, useState } from 'react';
import cn from 'classnames';

import { Drink } from '../../../../constants/models';

import classes from './cocktail-item.module.scss';

const CocktailItem: FC<Drink> = item => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className={classes.container}>
      <div className={classes.info}>
        <h1>{item.strDrink}</h1>

        <div className={classes.separator} />

        <p>{item.strCategory}</p>
        <p>{item.strAlcoholic}</p>
        <p>{item.strGlass}</p>

        <div className={classes.separator} />

        <h3>Instructions:</h3>
        <p>{item.strInstructions}</p>

        <div className={classes.separator} />

        <h3>List of ingredients:</h3>
        {item.ingredientList.map(item => (
          <div key={item.ingredient} className={classes.ingredient}>
            <span>{item.ingredient}:</span>
            <span>{item.measure}</span>
          </div>
        ))}
      </div>

      {!isLoaded && <div>LOADING</div>}

      <img
        src={item.strDrinkThumb}
        alt={item.strDrink}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        className={cn(classes.image, { [classes.hidden]: !isLoaded })}
      />
    </section>
  );
};

export default memo(CocktailItem);
