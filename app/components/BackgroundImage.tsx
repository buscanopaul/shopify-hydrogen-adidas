type Props = {
  src: string;
};

export function BackgroundImage({src}: Props) {
  return (
    <div
      className={`w-full bg-blue-500 md:h-screen h-96 bg-[url('/images/home.jpg')] bg-cover bg-center`}
    />
  );
}
