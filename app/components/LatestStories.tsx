import data from '../data/articles.json';
import {Heading} from './Heading';
import {TwoColumnsImageText} from './TwoColumnsImageText';

export function LatestStories() {
  return (
    <div className="py-8 px-6 md:px-8 lg:px-12 relative">
      <Heading isItalic={false}>More from adidas stories</Heading>
      <div className="mb-10" />
      <TwoColumnsImageText
        isReserve={false}
        title={data.articles[0].title}
        description={data.articles[0].description}
        imageUrl="bg-[url('https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/trail-running-vs-hiking-shoes-mh-d_221-1000452.jpg')]"
      />
      <TwoColumnsImageText
        isReserve={true}
        title={data.articles[1].title}
        description={data.articles[1].description}
        imageUrl="bg-[url('https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/adidas-hat-size-masthead-d_221-990755.jpg')]"
      />
      <TwoColumnsImageText
        isReserve={false}
        title={data.articles[2].title}
        description={data.articles[2].description}
        imageUrl="bg-[url('https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/samba-size-guide-masthead-d_221-982556.jpg')]"
      />
    </div>
  );
}
