export interface TypographyProps {
  text: string;
}

export const Typography = ({text}: TypographyProps) => {
  return <h1>{text}</h1>;
};
