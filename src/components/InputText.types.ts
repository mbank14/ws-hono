export interface IInputTextProps{
    id?: string;
    name?: string;
    value?: string | number;
    fullWidth?: boolean;
    disabled?: boolean;
    placeholder?: string;
    type: 'text' | 'password' | 'email' | 'number';
    readonly?: boolean;
    required?: boolean;
    error?: string;
    className?: string;
    onChange?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
}