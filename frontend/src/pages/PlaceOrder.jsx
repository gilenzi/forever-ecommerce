import React, {useState} from 'react';
import Title from '../components/ui/Title';

export default function PlaceOrder() {
  const [deliverInfo, setDeliverInfo] = useState();

  const inputClass = `border border-gray-300 rounded py-1.5 px-3.5 w-full`;

  return (
    <div>
      <div className="flex justify-between gap-10 flex-wrap">
        <div>
          <Title type="h1" position="left" title="delivery information" />
          <form>
            <div className="flex gap-3 justify-between mb-3">
              <input
                className={inputClass}
                type="text"
                name="first-name"
                placeholder="First name"
              />
              <input
                className={inputClass}
                type="text"
                name="last-name"
                placeholder="Last name"
              />
            </div>
            <input
              className={`${inputClass} mb-3`}
              type="email"
              name="email"
              placeholder="Email address"
            />
            <input
              className={`${inputClass} mb-3`}
              type="text"
              name="street"
              placeholder="Street"
            />
            <div className="flex gap-3 justify-between mb-3">
              <input
                className={inputClass}
                type="text"
                name="city"
                placeholder="City"
              />
              <input
                className={inputClass}
                type="text"
                name="state"
                placeholder="State"
              />
            </div>
            <div className="flex gap-3 justify-between mb-3">
              <input
                className={inputClass}
                type="text"
                name="zipcode"
                placeholder="Zipcode"
              />
              <input
                className={inputClass}
                type="text"
                name="country"
                placeholder="Country"
              />
            </div>
            <input
              className={inputClass}
              type="text"
              name="phone"
              placeholder="Phone"
            />
          </form>
        </div>
        <div className="w-full sm:w-[550px]">
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
          <button
            to={'/place-order'}
            className="uppercase w-fit ml-auto block bg-black text-white text-sm my-8 px-8 py-3"
          >
            place order
          </button>
        </div>
      </div>
    </div>
  );
}
