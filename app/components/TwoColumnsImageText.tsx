import {Heading} from './Heading';
import {Link} from './Link';

type Props = {
  isReserve: boolean;
};

export function TwoColumnsImageText({isReserve}: Props) {
  return (
    <div
      className={`relative md:flex ${
        isReserve && `flex-row-reverse`
      } w-full mb-20`}
    >
      <div className="md:w-2/4">
        <Link to={`/collections/`}>
          <div
            className={`bg-blue-500 h-96 bg-[url('/images/home.jpg')] bg-cover bg-center `}
          />
        </Link>
      </div>
      <div className="md:w-2/4 md:p-28 pt-10">
        <Heading isItalic={true}>Adidas Logos: history and meaning</Heading>
        <p className="md:pt-8">
          Ever wondered how the adidas logos came to be? Discover the history of
          adidas logos and the purpose behind each design evolution, from 1949.
        </p>
      </div>
    </div>
  );
}
