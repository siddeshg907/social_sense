// ThemeSelector.js
import React from 'react';
import { colors } from '@/lib/colors'; 
import { Check, CheckCheck, CheckIcon } from 'lucide-react';

const ThemeSelector = ({ theme, setTheme }) => {
  const handleColorChange = (color) => {
    setTheme({ ...theme, color });
  };

  return (
    <div className="flex flex-col">
      {/* Iterate over each section in the colors object */}
      {Object.keys(colors).map((section) => (
        <div key={section} className="flex flex-col gap-3 p-2">
          <p className="font-medium">{section.replace(/([A-Z])/g, ' $1')}</p>
          <div className="flex flex-row flex-wrap gap-2">
            {/* Iterate over each item in the current section */}
            {colors[section].map((item, index) => (
              <div
                key={index}
                style={{
                  background: item.color || item.gradient,
                  border: `1px solid ${theme.color === (item.color || item.gradient) ? 'black' : 'grey'}`,
                  borderRadius: "8px",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: item.color === "#000000" ? "#FFFFFF" : "#000000",
                  fontWeight: theme.color === (item.color || item.gradient) ? "bold" : "normal",
                }}
                onClick={() => handleColorChange(item.color || item.gradient)}
              >
                {theme.color === (item.color || item.gradient) && (
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <Check/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;

