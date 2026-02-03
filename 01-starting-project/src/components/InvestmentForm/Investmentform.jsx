import { useState } from "react";
const Investmentform = (props) => {

  const InitialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
  }

  const [userinput, setUserinput] = useState({
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
  })

  const submitChangeHandler = (e)=>{
    e.preventDefault();

    props.onCalculate(userinput);
  }

  const resetHandler = (e)=>{
    setUserinput(InitialUserInput);
  }

  const inputChangeHandler = (input, value)=>{
    setUserinput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      } 
    })
  }

  return (
    <div>
      <form onSubmit={submitChangeHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input 
            type="number" 
            id="current-savings" 
            value={userinput['current-savings']}
            onChange={(e) => {
              inputChangeHandler('current-savings', e.target.value)
            }}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input 
            type="number" 
            id="yearly-contribution"
            value={userinput['yearly-contribution']}
            onChange={(e) => {
              inputChangeHandler('yearly-contribution', e.target.value)
            }}
             />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input 
            type="number" 
            id="expected-return"
            //Here there is a - specital characer - that's why we need to use []
            value={userinput['expected-return']}
            onChange={(e) => {
              inputChangeHandler('expected-return',e.target.value)
            }}
             />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input 
            type="number" 
            id="duration"
            value={userinput.duration}
            onChange={(e) => {
              inputChangeHandler('duration', e.target.value)
            }} />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  )
}

export default Investmentform