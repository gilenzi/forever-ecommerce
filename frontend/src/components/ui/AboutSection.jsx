export default function AboutSection({items}) {
  const aboutItems = items?.map(({title, description}, ind) => (
    <div
      key={title + ind}
      className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
    >
      <b className="capitalize">{title}</b>
      <p className="text-gray-600">{description}</p>
    </div>
  ));
  return (
    <div className="flex flex-col md:flex-row text-sm mb-20">{aboutItems}</div>
  );
}
