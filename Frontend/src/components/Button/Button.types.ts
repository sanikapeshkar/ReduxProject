export interface ButtonProps {
    children: React.ReactNode;
    type:'button'|'submit'|'clear'
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
  }
  