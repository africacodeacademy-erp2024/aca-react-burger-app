import React, { useState } from 'react';
import styled from 'styled-components';

interface BurgerFillingsProps {
  color: string;
  name: string;
}

interface StyledBurgerFillingProps {
  bgColor: string;
}

const BurgerFilling = styled.div<StyledBurgerFillingProps>`
  margin: 0.25rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  width: 15rem;
  padding: 0 0.5rem;
`;

const BurgerFillings: React.FC<BurgerFillingsProps> = ({ color, name }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <BurgerFilling bgColor={color} onClick={toggleVisibility} style={{ display: isVisible ? 'flex' : 'none' }}>
      {name}
    </BurgerFilling>
  );
};

export default BurgerFillings;
