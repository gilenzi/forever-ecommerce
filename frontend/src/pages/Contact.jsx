import Newsletter from '../components/ui/Newsletter';
import Title from '../components/ui/Title';
import ContactImg from '@assets/contact.png';

export default function Contact() {
  return (
    <div>
      <Title title="Contact us" position="left" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-15">
        <img
          className="w-full max-w-[450px]"
          src={ContactImg}
          alt="Contact Image"
        />
        <div className="flex flex-col gap-6 justify-center">
          <h4 className="font-bold capitalize text-xl text-gray-600">
            Our store
          </h4>
          <p className="text-gray-500">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132
            <br />
            Email: admin@forever.com
          </p>
          <h4 className="font-bold capitalize text-xl text-gray-600">
            Careers at forever
          </h4>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border capitalize border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore jobs
          </button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
