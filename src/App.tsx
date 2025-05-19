import React from 'react';
import QuizApp from './components/QuizApp';
import { mockGroups } from './mock/sampleQuestions';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <QuizApp groups={mockGroups} />
    </div>
  );
}

export default App;