import {useState} from 'react';
import ProductSizes from '../components/ui/ProductSizes';
import Title from '../components/ui/Title';
import Tabs from '../components/ui/Tabs';

export default function ProductDetails() {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const productSizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const galleryImages = [
    'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png',
    'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png',
    'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img14.png',
    'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img35.png',
  ];

  function onSizeChange(newSizes) {
    setSelectedSizes(newSizes);
  }

  return (
    <div>
      <div className="flex gap-5">
        <ProductGallery images={galleryImages} />
        <div>
          <h1 className="capitalize font-medium text-2xl mt-2">
            Kid tapered slim fit trouser
          </h1>
          <p className="mt-5 text-3xl font-medium">$38</p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </p>
          <p className="mb-2 mt-5">Product sizes</p>
          <ProductSizes
            className={'flex gap-3'}
            sizes={productSizes}
            onSizeChange={onSizeChange}
          />

          <button className="mt-5 mb-5 uppercase bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            Add to cart
          </button>
          <hr />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <Tabs classNameTabDesc={'border border-gray-200 py-4 border-t-0'}>
        <Tabs.Tab name="description">
          <b>Description</b>
        </Tabs.Tab>
        <Tabs.Tab name="reviews">
          <b>Reviews (122)</b>
        </Tabs.Tab>

        <Tabs.Description name="description">
          <p className="mb-3 px-5">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="px-5">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </Tabs.Description>
        <Tabs.Description name="reviews">
          <p className="px-5">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </Tabs.Description>
      </Tabs>

      <Title title="Related products" type="h2" />
    </div>
  );
}

function ProductGallery({images}) {
  const [activeImage, setActiveImage] = useState(images[0]);

  function imageHandler(newSrc) {
    if (newSrc === activeImage) return;
    setActiveImage(newSrc);
  }

  return (
    <div className="flex gap-3">
      <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
        {images?.map((imgSrc) => (
          <img
            onClick={imageHandler.bind(this, imgSrc)}
            className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
            src={imgSrc}
            alt=""
          />
        ))}
      </div>
      <div className="w-full sm:w-[80%]">
        <img className="w-full h-auto" src={activeImage} alt="" />
      </div>
    </div>
  );
}
