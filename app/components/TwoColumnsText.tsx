import {Heading} from './Heading';

type Props = {
  title: string;
  description: string;
};

export function TwoColumnsText({title, description}: Props) {
  return (
    <div className="py-20 px-6 md:px-8 lg:px-12 relative md:flex justify-between items-start text-black">
      <Heading isItalic={false}>{title}</Heading>
      <div className="md:w-2/5 md:p-0 pt-5">
        <p className="uppercase">{description}</p>
      </div>
    </div>
  );
}
