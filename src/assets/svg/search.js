export const SearchIcon = ({ style }) => {
  const { width, height, color } = style;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="style=linear">
        <g id="search-broken">
          <path
            id="vector"
            d="M18.5 18.5L21 21"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <circle
            id="vector_2"
            cx="11.0529"
            cy="11.0529"
            r="8.3029"
            stroke={color}
            stroke-width="1.5"
          />
        </g>
      </g>
    </svg>
  );
};
