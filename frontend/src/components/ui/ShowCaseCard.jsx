export default function ShowCaseCard({img, title, price}) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={img}
          alt={title}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{title}</p>
      <p className="text-sm font-medium">${price}</p>
    </div>
  );
}
