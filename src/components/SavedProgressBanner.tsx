import React from 'react';
import { QuizState } from '../types';
import { ChevronRight, RotateCcw } from 'lucide-react';

// Helper function to format date to relative time
function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return days === 1 ? 'yesterday' : `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else {
    return 'just now';
  }
}

interface SavedProgressBannerProps {
  // Explicitly type the props

  quizState: QuizState;
  onContinue: () => void;
  onClearProgress: () => void;
  groups: { id: number; name: string }[];
}

const SavedProgressBanner: React.FC<SavedProgressBannerProps> = ({
  // Add type annotations to destructured props
  quizState,
  onContinue,
  onClearProgress,
  groups
}) => {
  // Skip rendering if there's no saved progress
  if (!quizState.lastUpdated) {
    return null;
  }

  const currentGroup = groups.find((g: {id: number; name: string}) => g.id === quizState.currentGroupId);
  const groupName = currentGroup ? currentGroup.name : 'Unknown';
  
  // Calculate time since last update
  const timeAgo = formatTimeAgo(quizState.lastUpdated);
  
  // Calculate progress percentage
  const totalAnswered = quizState.correctAnswers + quizState.incorrectAnswers;
  const progressPercentage = Math.round((totalAnswered / Object.keys(quizState.answeredQuestions).length) * 100) || 0;

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium text-blue-800">Saved Progress Found</h3>
          <p className="text-sm text-blue-600">
            You have progress in <span className="font-semibold">{groupName}</span> ({progressPercentage}% complete)
          </p>
          <p className="text-xs text-blue-500">Last updated {timeAgo}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onClearProgress}
            className="p-2 text-sm text-gray-600 hover:text-gray-800 flex items-center"
            title="Clear Progress"
          >
            <RotateCcw size={16} className="mr-1" />
            Clear
          </button>
          <button
            onClick={onContinue}
            className="bg-blue-600 text-white px-3 py-2 rounded text-sm flex items-center hover:bg-blue-700"
          >
            Continue
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedProgressBanner;
