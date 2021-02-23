import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions]=useState(data);
  return <main>
    <div className="container">
      <h3>Questions and answer about login</h3>
      <section className="info">
        {
          questions.map((ques)=><SingleQuestion key={ques.id} {...ques}/>)
        }
      </section>
    </div>
  </main>;
}

export default App;
