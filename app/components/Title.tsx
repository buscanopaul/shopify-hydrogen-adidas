type Props = {
  children: string;
};

export function Title({children}: Props) {
  return (
    <h1 className="py-8 px-6 md:px-8 lg:px-12 text-black md:text-8xl text-2xl uppercase">
      {children}
    </h1>
  );
}
