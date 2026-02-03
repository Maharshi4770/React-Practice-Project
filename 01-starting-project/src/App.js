import { useState } from 'react';
import Header from './components/Header/Header';
import InvestmentForm from './components/InvestmentForm/Investmentform';
import Investmenttable from './components/InvestmentTable/Investmenttable';

function App() {
  const [userInput, setuserInput] = useState(null);
  const calculateHandler = (userInput) => {
    
   setuserInput(userInput);
    
  };

  const yearlyData = [];

  if(userInput){

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
  
    
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }


  return (
    <div>
      <Header />

      <InvestmentForm onCalculate={calculateHandler}/>

      {!userInput && <p>No investment calculate yet.</p>}
      {userInput && < Investmenttable data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
