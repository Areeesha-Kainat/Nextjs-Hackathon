
// interface DropdownProps {
//   label: string;
//   options: string[];
// }

// const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
//   return (
//     <div className="flex flex-col">
//       <label className="text-sm font-medium text-gray-600">{label}</label>
//       <select className="mt-1 p-2 border rounded-md text-gray-700">
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Dropdown;


//=================

import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, className }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-gray-600 text-sm mb-1">{label}</label>
      <select
        className={`border border-gray-300 rounded-md shadow-sm w-full focus:ring-blue-500 focus:border-blue-500 ${className}`}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
