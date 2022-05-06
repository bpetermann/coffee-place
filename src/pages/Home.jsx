import React from 'react';
import classes from './Home.module.css';
import Footer from '../components/layout/Footer';
import advertisement from '../components/assets/images/advertisement.png';
import Button from '../components/shared/Button';

const Home = ({ content }) => {
  return (
    <div className={classes.container}>
      <div
        className={classes['image-container']}
        style={{
          backgroundImage: `url(${advertisement})`,
        }}
      >
        <span>Organic Coffee Beans</span>
      </div>
      <div className={classes['news-container']}>
        <h2>Back in Stock - Jamaica Blue </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
        <Button>Order now!</Button>
      </div>
      <div className={classes['articles-container']}>
        {content.map((item) => {
          return (
            <div className={classes['article-container']} key={item.name}>
              <img
                src={require(`../components/assets/images/${item.image}.png`)}
                alt={item.name}
                className={classes['article-image']}
              />
              <div className={classes['article-text']}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <Button color={'#488796'}>Read more</Button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
