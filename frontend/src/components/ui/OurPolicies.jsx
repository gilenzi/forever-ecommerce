export default function OurPolicies({cards}) {
  const policyCards = cards?.map(({title, icon, description, iconProps}) => (
    <PolicyCard
      key={title}
      title={title}
      icon={icon}
      description={description}
      iconProps={iconProps}
    />
  ));
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700 my-13">
      {policyCards}
    </div>
  );
}

function PolicyCard({icon: Icon, title, description, iconProps = {}}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Apply defaults but allow overrides */}
      <Icon size={50} className="text-gray-700" {...iconProps} />
      <p className="font-semibold mt-5">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
