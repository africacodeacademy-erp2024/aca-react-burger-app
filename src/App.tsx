import { useState } from 'react';
import styled from 'styled-components';
import TopBreadComponent from './components/TopBreadComponent';
import BottomBreadComponent from './components/BottomBreadComponent';
import BurgerFillings from './components/BurgerFillings';

interface AddFillingsProps {
  color: string;
  name: string;
}

interface StyledAddFillingProps {
  bgColor: string;
}

const AddFilling = styled.div<StyledAddFillingProps>`
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

function App() {
  const [fillings, setFillings] = useState<AddFillingsProps[]>([]);

  const addFilling = (color: string, name: string) => {
    setFillings([...fillings, { color, name }]);
  };

  const removeFilling = (index: number) => {
    setFillings(fillings.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TopBreadComponent />
      <BurgerFillings name='Tomato' color='red' />
      <BurgerFillings name='Meat' color='brown' />
      <BurgerFillings name='Lettuce' color='green' />
      <div>
        {fillings.map((filling, index) => (
          <AddFilling key={index} bgColor={filling.color} onClick={() => removeFilling(index)}>
            {filling.name}
          </AddFilling>
        ))}
      </div>
      <BottomBreadComponent />
      <div style={{marginTop: 10}}>
        <button onClick={() => addFilling('red', 'Tomato')}>Add Tomato</button>
        <button onClick={() => addFilling('green', 'Lettuce')}>Add Lettuce</button>
        <button onClick={() => addFilling('yellow', 'Cheese')}>Add Cheese</button>
        <button onClick={() => addFilling('brown', 'Meat')}>Add Meat</button>
        <button onClick={() => addFilling('burlywood', 'Onion')}>Add Onion</button>
      </div>
    </div>
  );
}

export default App;
