import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    btnType?: "button" | "submit";
    containerStyles?: string;
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}