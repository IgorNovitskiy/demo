import { FC, useState, memo } from 'react';

import { Loader } from '../loader';

import classes from './lazy-image.module.scss';

type LazyImageProps = {
  src: string;
  alt?: string;
};

const LazyImage: FC<LazyImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={classes.container}>
      {!isLoaded && (
        <div className={classes.loaderContainer}>
          <Loader />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        width={200}
        height={200}
      />
    </div>
  );
};

export default memo(LazyImage);
