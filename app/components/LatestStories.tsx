import {Heading} from './Heading';
import {TwoColumnsImageText} from './TwoColumnsImageText';

export function LatestStories() {
  return (
    <div className="py-8 px-6 md:px-8 lg:px-12 relative">
      <Heading isItalic={false}>More from adidas stories</Heading>
      <TwoColumnsImageText isReserve={false} />
      <TwoColumnsImageText isReserve={true} />
      <TwoColumnsImageText isReserve={false} />
    </div>
  );
}
