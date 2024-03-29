const Print = ({ style, fill, onClick }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M16 18V15H8V18M16 18V21H8V18M16 18H20V9H16M8 18H4V9H8M8 9H16M8 9V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V9"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Print;
