import ShowCaseCard from './ShowCaseCard';
import Title from './Title';

export default function ShowCaseCollection({
  title = '',
  heading,
  description = '',
}) {
  return (
    <div className="my-10">
      <Title title={title} type={heading} />

      <p className="w-3/4 m-auto text-center text-xs sm:text-sm md:text-base text-gray-600">
        {description}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
        <ShowCaseCard
          title="Kid Tapered Slim Fit Trouser"
          price={38}
          img={
            'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
          }
        />
      </div>
    </div>
  );
}
