import styled from 'styled-components';
import React from 'react';

const TopBreadContainer = styled.div`
  background-color: #d9b650;
  border: solid 1px #d9b650;
  margin: 0 0.5rem;
  width: 15rem;
  height: 3.5rem;
  border-radius: 50% 50% 0 0;
`;

const TopBreadText = styled.span`
  font-size: 1.2rem;
  color: white;
  text-align: center;
`;

const TopBreadComponent: React.FC = () => {
  return (
    <TopBreadContainer>
      <TopBreadText></TopBreadText>
    </TopBreadContainer>
  );
};

export default TopBreadComponent;
