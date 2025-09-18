import AboutSection from '../components/ui/AboutSection';
import Newsletter from '../components/ui/Newsletter';
import Title from '../components/ui/Title';
import AboutImg from '@assets/about.png';

export default function About() {
  const aboutItems = [
    {
      title: 'Quality Assurance:',
      description:
        'We meticulously select and vet each product to ensure it meets our stringent quality standards.',
    },
    {
      title: 'Convenience:',
      description:
        'With our user-friendly interface and hassle-free ordering process, shopping has never been easier.',
    },
    {
      title: 'Exceptional Customer Service:',
      description:
        'Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.',
    },
  ];

  return (
    <div>
      <Title title="About us" />

      <div className="flex flex-col md:flex-row flex-wrap my-10 gap-16">
        <img
          className="w-full flex-1 lg:max-w-[450px]"
          src={AboutImg}
          alt="About Image"
        />
        <div className="flex flex-col flex-1 justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h4 className="font-bold text-gray-800">Our Mission</h4>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <Title title="Why Choose us" position="left" />

      <AboutSection items={aboutItems} />

      <Newsletter />
    </div>
  );
}
