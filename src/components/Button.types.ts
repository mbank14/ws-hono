import { ReactNode } from "hono/jsx";


export interface ButtonProps {
    label: string;
    id?:string;
    
    disabled?: boolean;
    isActive?: boolean;
    fullWidth? :boolean;
    icon?: ReactNode;
    href?: string;

    size: "small" | "medium" | "large";
    variant: "primary" | "secondary" | "danger";

    onClick?: () => void;
}