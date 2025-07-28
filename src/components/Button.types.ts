import { ReactNode } from "hono/jsx";


export interface ButtonProps {
    text: string;
    
    isDisabled?: boolean;
    isActive?: boolean;
    fullWidth? :boolean;
    icon?: ReactNode;
    link?: string;

    size: "small" | "medium" | "large";
    variant: "primary" | "secondary" | "danger";

    onClick?: () => void;
}