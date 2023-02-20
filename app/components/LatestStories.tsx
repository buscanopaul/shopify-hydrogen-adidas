import {Heading} from './Heading';
import {TwoColumnsImageText} from './TwoColumnsImageText';

export function LatestStories() {
  return (
    <div className="py-8 px-6 md:px-8 lg:px-12 relative">
      <Heading isItalic={false}>More from adidas stories</Heading>
      <TwoColumnsImageText
        isReserve={false}
        title="Adidas Logos: history and meaning1"
        description=" Ever wondered how the adidas logos came to be? Discover the history of
          adidas logos and the purpose behind each design evolution, from 1949."
      />
      <TwoColumnsImageText
        isReserve={true}
        title="Adidas Logos: history and meaning2"
        description=" Ever wondered how the adidas logos came to be? Discover the history of
          adidas logos and the purpose behind each design evolution, from 1949."
      />
      <TwoColumnsImageText
        isReserve={false}
        title="Adidas Logos: history and meaning3"
        description=" Ever wondered how the adidas logos came to be? Discover the history of
          adidas logos and the purpose behind each design evolution, from 1949."
      />
    </div>
  );
}
