export interface SelectProps {
  id: string;
  defaultValue: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  height: string;
  width: string;
  options: { name: string }[];
}

export interface InputProps {
  id: string;
  value: string;
  type: string;
  label: string;
  placeholder: string;
  height: string;
  width: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface ButtonProps {
  text: string;
  type: "button" | "submit";
  active: boolean;
  handleClick: () => void;
}

export interface FormProps {
  title: string;
  selectsInfo: SelectProps[];
  inputsInfo: InputProps[];
  buttonsInfo: ButtonProps[];
  errors: string[];
}
