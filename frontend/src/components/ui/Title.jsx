export default function Title({title = ' ', type = 'h1', position = 'center'}) {
  const splittedTitle = title.split(' ');
  const restOfTitle = splittedTitle.slice(1);
  const Heading = type;

  const styling = {
    center: {
      wrapper: 'justify-center',
      heading: 'text-center',
    },
    left: {
      wrapper: 'justify-start',
      heading: 'text-left',
    },
    right: {
      wrapper: 'justify-end',
      heading: 'text-right',
    },
  };

  return (
    <div className={`flex items-center  gap-3 ${styling[position].wrapper}`}>
      <Heading
        className={`uppercase  py-8  text-3xl text-gray-500 ${styling[position].heading}`}
      >
        {splittedTitle[0]}{' '}
        {restOfTitle.length && (
          <span className="text-center uppercase  py-8  text-3xl  text-gray-700 font-medium">
            {restOfTitle.join(' ')}
          </span>
        )}
      </Heading>

      <p className="w-8 md:w-11 h-[2px] bg-gray-500"></p>
    </div>
  );
}
