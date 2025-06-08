export interface Option {
  value: string | number;
  label: string;
}

export interface DropdownProps {
  label?: string;
  name?: string;
  options: Option[];
  value?: string | number;
  placeholder?: string;
  defaultValue?: string;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  className?: string;
}