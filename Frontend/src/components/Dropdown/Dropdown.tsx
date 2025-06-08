import React from 'react';
import { DropdownProps } from './Dropdown.types';
import './Dropdown.css'


const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  options,
  value,
  defaultValue,
  placeholder,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`dropdown ${className}`}>
      <select
        name={name}
        id={name}
        className="dropdown-select"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      >
        <option className='option' key={'placeholder-option'} value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option className='option' key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
