import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    combination_mpg:number;
    class: string;
    displacement:number;
    cylinders:number;
    fuel_type:string;
    drive:string;
    make:string;
    highway_mpg:number;
    transmission:string;
    model:string;
    year: number;
}