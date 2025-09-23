import ProductImg from '@assets/product-img.png';

export default function ListItems() {
  const mockItems = [
    {
      id: 1,
      image: ProductImg,
      name: 'kid tapered slim fit trouser',
      category: 'kids',
      price: 38,
    },
    {
      id: 2,
      image: ProductImg,
      name: 'kid tapered slim fit trouser',
      category: 'kids',
      price: 38,
    },
    {
      id: 3,
      image: ProductImg,
      name: 'kid tapered slim fit trouser',
      category: 'kids',
      price: 38,
    },
    {
      id: 4,
      image: ProductImg,
      name: 'kid tapered slim fit trouser',
      category: 'kids',
      price: 38,
    },
    {
      id: 5,
      image: ProductImg,
      name: 'kid tapered slim fit trouser',
      category: 'kids',
      price: 38,
    },
    {
      id: 6,
      image: ProductImg,
      name: 'kid tapered slim fit trouser',
      category: 'kids',
      price: 38,
    },
  ];

  return (
    <div className="p-2 md:p-5 ">
      <div className="">
        <p className="capitalize mb-2 text-gray-600">All products list</p>
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 border-gray-300 mb-5 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        <ul>
          {mockItems.map((item) => (
            <ListItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ListItem({data}) {
  const {name, image, category, price} = data;
  return (
    <li className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2  text-sm mb-4 border border-gray-300 ">
      <img className="w-12" src={image} alt={name} />
      <p className="capitalize text-gray-500">{name}</p>
      <p className="capitalize text-gray-500">{category}</p>
      <p className="capitalize text-gray-500">${price}</p>
      <div className="">
        <button className="outline-none">X</button>
      </div>
    </li>
  );
}
