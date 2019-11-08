import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Images from './Images';

const Figure = (props) => {
  const img_styles = [props.sizes];

  if(props.custom_style != undefined) {
    img_styles.push(props.custom_style)
  }

  return <Image style={img_styles} source={Images[props.img_key]}/>
}

Figure.propTypes = {
  img_key: PropTypes.string.isRequired,
  sizes: PropTypes.shape({
    width: PropTypes.any.isRequired,
    height: PropTypes.any.isRequired,
  }),
  custom_style: PropTypes.object
}

export default Figure;
