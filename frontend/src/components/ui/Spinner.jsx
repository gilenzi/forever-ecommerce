export function Spinner({width = 48, height = 48, style}) {
  return (
    <div
      className="relative inline-block animate-spin"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...style,
      }}
    >
      {/* Outer border */}
      <div className="w-full h-full rounded-full border-t-4 border-r-4 border-t-gray-800 border-r-transparent box-border"></div>

      {/* Inner pseudo (::after) equivalent */}
      <div className="absolute top-0 left-0 w-full h-full rounded-full border-b-4 border-l-4 border-b-orange-500 border-l-transparent box-border"></div>
    </div>
  );
}
