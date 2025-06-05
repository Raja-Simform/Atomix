export interface SnackBarContainerProps {
    variant: "plain" | "soft" | "solid" | "outlined";
    color: string;
    size: "sm" | "md" | "lg";
 }
 export interface SnackBarProps extends SnackBarContainerProps {
    autoHideDuration:number;
    onClose:()=>void;
 }
 export type colorType="solid"|"soft"|"text"|"border"|"plain";