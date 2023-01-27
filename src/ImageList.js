import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import mallorca from './images/kerstin_caro_mallorca.jpeg'
import rooftop from './images/nostalgia/rooftop.jpeg'
import tipsyBear from './images/nostalgia/tipsy_bear_1.jpeg'
import mauerpark from './images/nostalgia/mauerpark.jpeg'
import bikes from './images/nostalgia/bikes.jpeg'
import birthday from './images/nostalgia/birthday.jpeg'
import hiking from './images/nostalgia/hiking.jpeg'
import lunch from './images/nostalgia/lunch.jpeg'
import bikes_majo from './images/nostalgia/bikes_majo.jpeg'
import mallorca_cocktails from './images/nostalgia/mallorca_cocktails.jpeg'
import tanz from './images/nostalgia/tanz.jpeg'
import chips from './images/nostalgia/chips.jpeg'


export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 1000, height: 1000, margin: 'auto' }} cols={3} rowHeight={328}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: mallorca,
    title: 'Breakfast',
  },
  {
    img: rooftop,
    title: 'Burger',
  },
  {
    img: tipsyBear,
    title: 'Camera',
  },
  {
    img: mauerpark,
    title: 'Coffee',
  },
  {
    img: bikes,
    title: 'Hats',
  },
  {
    img: birthday,
    title: 'Honey',
  },
  {
    img: hiking,
    title: 'Basketball',
  },
  {
    img: lunch,
    title: 'Fern',
  },
  {
    img: bikes_majo,
    title: 'Mushrooms',
  },
  {
    img: mallorca_cocktails,
    title: 'Tomato basil',
  },
  {
    img: tanz,
    title: 'Sea star',
  },
  {
    img: chips,
    title: 'Bike',
  },
];