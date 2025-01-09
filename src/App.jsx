import { useState, useEffect } from "react";
import "./App.css";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import PDFFile from "./components/PDFFile";
import CVInput from "./components/CVInput";

const App = () => {
  const [cvData, setCvData] = useState({
    name: "John Smith",
    email: "johnsmith649@gmail.com",
    phone: "123 456 7890",
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
    experience: [
      {
        heading: "Supermarket",
        subHeading: "Produce Assistant",
        location: "Auckland, New Zealand",
        date: "2023 - Present",
        description: "Blah blah blah blah\nabcd",
      },
    ],
    projects: [
      {
        heading: "CV-Creator",
        link: "https://github.com/Andy-Huangg/CV-Creator",
        subHeading: "Web Application for Creating Professional CVs",
        location: "React, HTML, CSS, JavaScript",
        date: "2025",
        description:
          "CV-Creator is a project I built to improve my React skills by creating a tool for generating customizable CVs. This very CV was generated using the project.",
      },
    ],
    skills: [
      "Java - Knowledge of object-oriented design concepts",
      " MATLAB Created graphs, visualized data and solved mathematical problems.",
    ],
    referees: [
      {
        heading: "George mate",
        title: "Main Supervisor",
        company: "ThisCompany",
        phone: "123 456 7890 ",
      },
    ],
  });
  const [sectionOrder, setSectionOrder] = useState([
    "personalInfo",
    "education",
    "experience",
    "projects",
    "skills",
    "referees",
  ]);

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
        <h1>CV • Creator</h1>
        <CVInput cvData={cvData} setCvData={setCvData}></CVInput>
      </div>
      <div className="rightSide">
        <div>
          {showDownload ? (
            <div className="">
              <PDFDownloadLink
                document={<PDFFile data={cvData} sectionOrder={sectionOrder} />}
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
          <PDFViewer width={1000} height={1150}>
            <PDFFile data={cvData} sectionOrder={sectionOrder}></PDFFile>
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default App;
