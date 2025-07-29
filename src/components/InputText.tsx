import { IInputTextProps } from "./InputText.types";

export const InputText = ({
  type = "text",
  id,
  name,
  className,
  fullWidth,
  ...rest
}: IInputTextProps) => {
  return (
    <>
      <input type={type} name={name} id={id} class={`${className} `} {...rest} />
    </>
  );
};
