import React from 'react';
import * as Styled from './styled';
import PropTypes from 'prop-types';

const ingredientSwitch = (type) =>
  ({
    'bread-bottom': <Styled.BreadBottom />,
    'bread-top': (
      <Styled.BreadTop>
        <Styled.Seeds1 />
        <Styled.Seeds2 />
      </Styled.BreadTop>
    ),
    meat: <Styled.Meat />,
    cheese: <Styled.Cheese />,
    bacon: <Styled.Bacon />,
    salad: <Styled.Salad />,
  }[type]);

const BurgerIngredient = (props) => ingredientSwitch(props.type);

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
