import React from 'react';
import { SubCategory } from '../types';

interface SubCategorySelectorProps {
  subCategories: SubCategory[];
  currentSubCategoryId: number;
  onSelectSubCategory: (subCategoryId: number) => void;
}

const SubCategorySelector: React.FC<SubCategorySelectorProps> = ({
  subCategories,
  currentSubCategoryId,
  onSelectSubCategory
}) => {
  if (!subCategories || subCategories.length === 0) {
    return null;
  }

  return (
    <div className="mb-4">
      <label htmlFor="sub-category-select" className="block text-sm font-medium text-gray-700 mb-1">
        Seleccionar Sub-Categoría
      </label>
      <div className="relative">
        <select
          id="sub-category-select"
          value={currentSubCategoryId}
          onChange={(e) => onSelectSubCategory(Number(e.target.value))}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          {subCategories.map((subCategory) => (
            <option key={subCategory.id} value={subCategory.id}>
              {subCategory.name} ({subCategory.questions.length} preguntas)
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SubCategorySelector;
