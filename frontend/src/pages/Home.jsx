import Hero from '../components/ui/Hero';
import ShowCaseCollection from '../components/ui/ShowCaseCollection';
import Newsletter from '../components/ui/Newsletter';
import OurPolicies from '../components/ui/OurPolicies';

import {FaHeadset} from 'react-icons/fa';
import {FaCircleCheck} from 'react-icons/fa6';
import {MdCurrencyExchange} from 'react-icons/md';

export default function Home() {
  const policyCards = [
    {
      title: 'Easy Exchange Policy',
      description: 'We offer hassle free exchange policy',
      icon: FaCircleCheck,
    },
    {
      title: '7 Days Return Policy',
      description: 'We provide 7 days free return policy',
      icon: MdCurrencyExchange,
    },
    {
      title: 'Best customer support',
      description: 'We provide 24/7 customer support',
      icon: FaHeadset,
    },
  ];

  return (
    <div>
      <Hero />
      <ShowCaseCollection
        title="LATEST COLLECTIONS"
        heading="h3"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the."
      />
      <ShowCaseCollection
        title="Best sellers"
        heading="h3"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the."
      />
      <OurPolicies cards={policyCards} />
      <Newsletter />
    </div>
  );
}
