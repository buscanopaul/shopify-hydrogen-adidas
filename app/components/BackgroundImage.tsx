type Props = {
  src: string;
};

export function BackgroundImage({src}: Props) {
  return (
    <div
      className={`w-full bg-blue-500 md:h-screen h-96 ${src} bg-cover bg-center`}
    />
  );
}
