import {Heading} from './Heading';

export function TwoColumnsText() {
  return (
    <div className="py-20 px-6 md:px-8 lg:px-12 relative md:flex justify-between items-start text-black">
      <Heading isItalic={false}>Ready. Set. Gift.</Heading>
      <div className="md:w-2/5 md:p-0 pt-5">
        <p className="uppercase">
          We'eve done the hard part for you and rounded up great gift ideas for
          everyone on your list from best sellers to reimagined classics.
        </p>
      </div>
    </div>
  );
}
