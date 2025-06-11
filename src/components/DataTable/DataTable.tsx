interface DatatableProps {
  columns: string[];
  data: Array<Array<number | string | boolean>>;
}

export default function DataTable({ columns, data }: DatatableProps) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen
        bg-gray-900 text-white font-mono"
    >
      <table className="text-xl rounded-lg shadow-lg bg-gray-800 w-full ">
        <thead>
          <tr className="flex p-4 bg-gray-700 rounded-t-lg">
            {columns.map((col, index) => (
              <th key={index} className="p-4 flex-1 text-left uppercase">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-4 text-center">
                No data available.
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`flex p-4  ${
                  rowIndex % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                } ${rowIndex === data.length - 1 ? "rounded-b-lg" : ""}`}
              >
                {row.map((value, colIndex) => (
                  <td key={colIndex} className="p-4  flex-1">
                    {typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : value}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
