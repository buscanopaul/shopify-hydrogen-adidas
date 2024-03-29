import {Heading} from './Heading';
import {Link} from './Link';

type Props = {
  isReserve: boolean;
  title: string;
  description: string;
  imageUrl: string;
};

export function TwoColumnsImageText({
  isReserve,
  title,
  description,
  imageUrl,
}: Props) {
  return (
    <div
      className={`relative md:flex ${
        isReserve && `flex-row-reverse`
      } w-full mb-20`}
    >
      <div className="md:w-2/4">
        <Link to={`/collections/`}>
          <div className={`bg-blue-500 h-96 ${imageUrl} bg-cover bg-center `} />
        </Link>
      </div>
      <div className="md:w-2/4 md:p-20 pt-10">
        <Heading isItalic={true}>{title}</Heading>
        <p className="md:pt-8 text-black">{description}</p>
      </div>
    </div>
  );
}
