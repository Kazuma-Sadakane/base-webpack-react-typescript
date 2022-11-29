export interface TextFieldProps {
  helperText?: string;
  type?: string;
  [x: string]: unknown;
}

export const TextField = ({
  helperText,
  type = 'text',
  ...rest
}: TextFieldProps) => {
  return (
    <div>
      <input type={type} {...rest} />
      {helperText && <p style={{color: 'red'}}>{helperText}</p>}
    </div>
  );
};
