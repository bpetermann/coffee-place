import React from 'react';
import classes from './Menue.module.css';
import Container from '../components/shared/Container';
import { products } from '../data/ContentData';
import Button from '../components/shared/Button';

const Menue = () => {
  return (
    <Container>
      <h2 className={classes['headline']}>Menu / Our Beans </h2>
      <div className={classes['products-container']}>
        {products.map((item) => {
          return (
            <div className={classes['product']} key={item.name}>
              <img
                src={require(`../components/assets/images/${item.image}.png`)}
                alt={item.name}
                className={classes['product-image']}
              />
              <div className={classes['product-text']}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <div className={classes['button-positioner']}>
                  <Button color={'#488796'}>Read more</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Menue;
