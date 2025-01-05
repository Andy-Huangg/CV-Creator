import { useState, useEffect } from "react";
import "./App.css";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import PDFFile from "./components/PDFFile";
import CVDetails from "./components/CVDetails";

const App = () => {
  const [cvData, setCvData] = useState({
    name: "John Smith",
    email: "johnsmith649@gmail.com",
    phone: "0284073446",
    location: "Auckland, New Zealand",
    github: "https://github.com/Andy-Huangg",
    education: [
      {
        heading: "University of Auckland",
        subHeading: "BE(Hons) in Software Engineering",
        location: "Auckland, New Zealand",
        date: "2023 - Present",
        description: "Blah blah blah blah\nabcd",
      },
    ],
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
                fileName={`${cvData.name} CV.pdf`}
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
