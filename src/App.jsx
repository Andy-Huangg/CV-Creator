import { useState } from "react";
import "./App.css";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import PDFFile from "./components/PDFFile";
import CVDetails from "./components/CVDetails";

const App = () => {
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    github: "",
    education: [],
    experience: [],
    projects: [],
    skills: [],
    referees: [],
  });
  return (
    <div className="main">
      <div className="leftSide">
        <CVDetails cvData={cvData} setCvData={setCvData}></CVDetails>
      </div>
      <div className="rightSide">
        <div>
          <PDFDownloadLink document={<PDFFile />} fileName="somename.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </div>

        <div>
          <PDFViewer width={1000} height={1000}>
            <PDFFile />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default App;
