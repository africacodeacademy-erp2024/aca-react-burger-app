import styled from 'styled-components';
import React from 'react';

const BottomBread = styled.div`
  background-color: #d9b650;
  border: solid 1px #d9b650;
  margin: 0 0.5rem;
  width: 15rem;
  height: 2.5rem;
  border-radius: 0 0 50% 50%;
`;

const BottomBreadComponent: React.FC = () => {
  return <BottomBread />;
};

export default BottomBreadComponent;
