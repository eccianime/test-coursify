export type ISelectedOption = 'DEFAULT' | 'ASC' | 'DESC' | 'MORE_VIEWS' | 'LESS_VIEWS';

export type IOption = {
    label: string;
    value: ISelectedOption;
}

export type IPicker = {
    options: IOption[];
    value: ISelectedOption;
    setValue: (value: ISelectedOption) => void;
}