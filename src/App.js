import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card'

//import './App.css';

const App = () => {

  return (
    <div className="App"
      style={{
        maxWidth: 600,
        margin: '30px auto',
      }}>
      <PromotionCard promotion={promotion} />
    </div>
  );
}

export default App;
