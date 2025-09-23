import {Link} from 'react-router-dom';
import Title from '../components/ui/Title';
import {FaRegTrashAlt} from 'react-icons/fa';

export default function Cart() {
  const cartItems = [
    {
      img: 'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png',
      name: 'Men round neck pure cotton t-shirt',
      price: 54,
      size: 'XL',
    },
    {
      img: 'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png',
      name: 'Men round neck pure cotton t-shirt',
      price: 32,
      size: 'XL',
    },
    {
      img: 'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png',
      name: 'Men round neck pure cotton t-shirt',
      price: 21,
      size: 'XL',
    },
  ];

  function qtyHandler() {}
  function removeItemHandler() {}

  return (
    <div>
      <Title type="h1" title="Your cart" />

      <ul>
        {cartItems?.map(({img, name, price, size}, ind) => (
          <li
            className="flex justify-between flex-wrap gap-3 items-center border-b mb-6 p-3 border-gray-200"
            key={ind + name}
          >
            <img className="w-16 sm:w-20" src={img} alt={name} />
            <div>
              <p>{name}</p>
              <div className="flex gap-5">
                <p>${price}</p>
                <p className="px-2 sm:px-3 sm:py-1 border border-gray-200 bg-slate-50">
                  {size}
                </p>
              </div>
            </div>
            <div>
              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                value={1}
                min={1}
                onChange={qtyHandler}
              />
            </div>
            <FaRegTrashAlt min={25} onClick={removeItemHandler} />
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-end">
        <div className="w-full sm:w-[450px]">
          <Title type="h3" position="left" title="Cart totals" />
          <div>
            <p className="flex justify-between gap-3 border-b border-gray-200 pb-2">
              Subtotal <span>$128.00</span>
            </p>
            <p className="flex justify-between gap-3 border-b border-gray-200 pb-2">
              Shipping Fee <span>$10.00</span>
            </p>
            <p className="flex justify-between gap-3 font-bold">
              Total <span>$138.00</span>
            </p>
          </div>
          <Link
            to={'/place-order'}
            className="uppercase w-fit ml-auto block bg-black text-white text-sm my-8 px-8 py-3"
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
