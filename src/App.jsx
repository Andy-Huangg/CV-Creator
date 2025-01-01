import { useState, useEffect } from "react";
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

  const [showDownload, setShowDownload] = useState(false);
  const handleGeneratePDF = () => {
    setShowDownload(true);
  };

  useEffect(() => {
    setShowDownload(false);
  }, [cvData]);

  return (
    <div className="main">
      <div className="leftSide">
        <CVDetails cvData={cvData} setCvData={setCvData}></CVDetails>
      </div>
      <div className="rightSide">
        <div>
          {showDownload ? (
            <div className="">
              <PDFDownloadLink
                document={<PDFFile data={cvData} />}
                fileName="somename.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? null : <button>Download</button>
                }
              </PDFDownloadLink>
            </div>
          ) : (
            <button onClick={handleGeneratePDF}>Generate PDF</button>
          )}
        </div>

        <div>
          <PDFViewer width={1000} height={1000}>
            <PDFFile data={cvData}></PDFFile>
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default App;
