import React, { useState, useEffect } from 'react';
import QuizApp from './components/QuizApp';
import { mockGroups } from './mock/sampleQuestions';

// Error boundary class component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="mb-4">The application encountered an error. Please try refreshing the page.</p>
            <button 
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Clear Data & Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [safeGroups, setSafeGroups] = useState<any[]>([]);

  useEffect(() => {
    // Validate mockGroups before using them
    try {
      // Make sure mockGroups is an array
      if (!Array.isArray(mockGroups)) {
        console.error('mockGroups is not an array');
        setSafeGroups([]);
      } else {
        // Create a safe copy of the groups with validation
        const validatedGroups = mockGroups.map(group => ({
          id: typeof group.id === 'number' ? group.id : 1,
          name: typeof group.name === 'string' ? group.name : 'Unknown Group',
          questions: Array.isArray(group.questions) 
            ? group.questions.map(q => ({
                id: typeof q.id === 'number' ? q.id : Math.random(),
                text: typeof q.text === 'string' ? q.text : 'Unknown Question',
                alternatives: Array.isArray(q.alternatives) 
                  ? q.alternatives.map(alt => ({
                      text: typeof alt.text === 'string' ? alt.text : 'Unknown Option',
                      isCorrect: typeof alt.isCorrect === 'boolean' ? alt.isCorrect : false
                    }))
                  : []
              }))
            : []
        }));
        setSafeGroups(validatedGroups);
      }
    } catch (error) {
      console.error('Error processing groups:', error);
      setSafeGroups([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100">
        {safeGroups.length > 0 ? (
          <QuizApp groups={safeGroups} />
        ) : (
          <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">No Quiz Data Available</h2>
              <p>Unable to load quiz questions. Please try refreshing the page.</p>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;