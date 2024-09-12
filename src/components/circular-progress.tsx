export const CircularProgress = ({
  strokeWidth = 4,
  sqSize = 96,
  percentage,
}: {
  strokeWidth?: number;
  sqSize?: number;
  percentage: number;
}) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;
  const statusMessage = `${percentage}%`;

  return (
    <svg
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}
    >
      <circle
        className="fill-none stroke-gray-100"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="fill-none stroke-[#b3e690] transition-all delay-200 ease-in"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        color="red"
        fill="#b3e690"
        className="font-semibold"
      >
        {statusMessage}
      </text>
    </svg>
  );
};
