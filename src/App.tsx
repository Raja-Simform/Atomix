import "./App.css";
import Otp from "./components/Otp/Otp";
// import DataTable from "./components/DataTable/DataTable";
// import FileUploader from "./components/FileUploader/FileUploader";

function App() {
  return (
    <>
      {/* <DataTable
        columns={["Name", "Age", "City", "Occupation", "Joined Date", "Active"]}
        data={[
          ["John Doe", 28, "New York", "Software Engineer", "2020-01-15", true],
          [
            "Sara Lee",
            32,
            "San Francisco",
            "Product Manager",
            "2018-07-20",
            false,
          ],
          ["David Kim", 36, "California", "UX Designer", "2019-11-01", true],
          ["Ella Chen", 25, "Boston", "Data Analyst", "2021-03-10", true],
          [
            "Michael Brown",
            45,
            "Chicago",
            "Marketing Specialist",
            "2017-09-05",
            true,
          ],
          [
            "Jessica White",
            29,
            "Seattle",
            "Graphic Designer",
            "2022-01-22",
            false,
          ],
          [
            "Chris Green",
            33,
            "Austin",
            "Sales Representative",
            "2019-04-18",
            true,
          ],
          ["Laura Black", 40, "Denver", "HR Manager", "2016-12-01", true],
        ]}
      />
      <FileUploader
        accept=".jpg,.png"
        maxSize={5 * 1024 * 1024}
        onUpload={(files) => console.log(files)}
      /> */}
      <Otp SentOtp={"4456"}/>
    </>
  );
}

export default App;
