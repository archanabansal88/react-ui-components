import { useState } from "react";
import "./CustomDropdown.css";

type SelectOptions = {
  id: number | string;
  label: string;
};

type CustomDropdownProps = {
  options: SelectOptions[];
  multiple?: Boolean | undefined;
  selectedValue: SelectOptions[];
  onChange: (value: SelectOptions[]) => void;
};

const CustomDropdown = ({
  options,
  selectedValue,
  multiple,
  onChange,
}: CustomDropdownProps) => {
  const [isShown, setIsShown] = useState(false);

  const handleOptionClick = (option: SelectOptions) => {
    if (multiple) {
      if (selectedValue.includes(option)) {
        onChange(selectedValue.filter((value) => value !== option));
      } else {
        onChange([...selectedValue, option]);
      }
    } else {
      onChange([option]);
    }
  };

  const handleClearOptions = () => {
    onChange([]);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-btn" onClick={() => setIsShown(!isShown)}>
        <div className="select-box">
          {selectedValue.map((option) => (
            <div
              key={option.id}
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(option);
              }}
              className={multiple ? "selected-option" : ""}
            >
              {option.label}
              {multiple && <span> &times;</span>}
            </div>
          ))}
        </div>
        <div className="clear-btn-container">
          <button
            className="clear-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleClearOptions();
            }}
          >
            &times;
          </button>
          <div style={{ fontSize: "1.5rem" }}>
            <svg
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 20l10 10 10-10z" />
              <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      {isShown && (
        <div className="dropdown-content">
          {options.map((value) => (
            <div
              key={value.id}
              className="dropdown-item"
              onClick={() => {
                handleOptionClick(value);
                setIsShown(false);
              }}
            >
              {value.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
