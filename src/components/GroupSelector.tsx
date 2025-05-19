import React from 'react';
import { Group } from '../types';
import { Menu } from 'lucide-react';

interface GroupSelectorProps {
  groups: Group[];
  currentGroupId: number;
  onSelectGroup: (groupId: number) => void;
}

const GroupSelector: React.FC<GroupSelectorProps> = ({
  groups,
  currentGroupId,
  onSelectGroup,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelectGroup = (groupId: number) => {
    onSelectGroup(groupId);
    setIsOpen(false);
  };
  
  const currentGroup = groups.find(group => group.id === currentGroupId);
  
  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-white rounded-lg shadow-md px-4 py-2 text-gray-800 font-medium"
      >
        <Menu size={20} />
        <span>{currentGroup?.name || 'Select Group'}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-10">
          <ul className="py-1">
            {groups.map(group => (
              <li key={group.id}>
                <button
                  onClick={() => handleSelectGroup(group.id)}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    group.id === currentGroupId ? 'bg-blue-50 text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {group.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GroupSelector;