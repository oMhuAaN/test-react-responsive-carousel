import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

function MaterialCarousel(props) {
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Carousel
      animation='slide'
      swipe={true}
    >
      {
        items.map((item, i) => (
          <Paper>
            <h2>sdfsdfasdfas</h2>
            <p>asdfasdfdsafds</p>
          </Paper>
        ))
      }
    </Carousel>
  )
}

export default MaterialCarousel;
