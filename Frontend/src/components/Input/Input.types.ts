export interface InputProps {
    name?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    defaultValue?: string;
    maxLength?: number;
  }
  