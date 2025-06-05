import "./Grid.css";
interface GridProps {
  range: number[];
  attendence: number[];
}

export default function Grid({ range, attendence }: GridProps) {
  const [start, end] = range;

  return (
    <div className="row">
      {attendence.slice(start, end + 1).map((daysAttended, weekIndex) => {
        const actualWeek = start + weekIndex;
        return (
          <div className="container" key={actualWeek}>
            <div className="boxes-container">
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const isAttended = dayIndex < daysAttended;
                return (
                  <span
                    className={`boxStyle ${
                      isAttended ? "filledBoxStyle" : "emptyBoxStyle"
                    }`}
                    key={dayIndex}
                    title={isAttended ? "Attended" : "Missed"}
                  />
                );
              })}
            </div>
            <strong className="week-no">{actualWeek + 1}</strong>
          </div>
        );
      })}
    </div>
  );
}
