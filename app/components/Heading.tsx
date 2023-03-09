type Props = {
  children: string;
  isItalic?: boolean | undefined;
};

export function Heading({children, isItalic}: Props) {
  return (
    <h2 className={`uppercase text-4xl font-bold text-black`}>{children}</h2>
  );
}
