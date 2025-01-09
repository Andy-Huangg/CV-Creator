import React from "react";

export default function LiveDisplay({ data, sectionOrder }) {
  const makeSection = (section) => {
    switch (section) {
      case "personalInfo":
        return (
          <div>
            <div style={styles.section}>
              <div>
                <p style={styles.name}>{data.name}</p>
              </div>
              <div style={styles.personalInformation}>
                <p style={styles.personalInformationChild}>{data.email}</p>
                <p style={styles.personalInformationChild}>{data.phone}</p>
                <p style={styles.personalInformationChild}>{data.location}</p>
                <p style={styles.personalInformationChild}>{data.github}</p>
              </div>
            </div>
            <div style={styles.horizontalLine}></div>
          </div>
        );
      case "education":
        return (
          <div>
            <p style={styles.sectionHeader}>Education</p>
            <div style={styles.horizontalLine}></div>
            <div style={styles.educationSection}>
              {data.education.map((edu) => (
                <div key={crypto.randomUUID()}>
                  <div
                    style={{ ...styles.spaceBetween, ...styles.mainHeading }}
                  >
                    <p style={styles.marginTop}>{edu.heading}</p>
                    <p style={styles.marginTop}>{edu.date}</p>
                  </div>
                  <div style={{ ...styles.spaceBetween, ...styles.subHeading }}>
                    <p style={styles.zero}>{edu.subHeading}</p>
                    <p style={styles.zero}> {edu.location}</p>
                  </div>
                  <p style={styles.description}>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "experience":
        return (
          <div>
            <p style={styles.sectionHeader}>Work Experience</p>
            <div style={styles.horizontalLine}></div>
            <div style={styles.educationSection}>
              {data.experience.map((exp) => (
                <div key={crypto.randomUUID()}>
                  <div
                    style={{ ...styles.spaceBetween, ...styles.mainHeading }}
                  >
                    <p style={styles.marginTop}> {exp.heading}</p>
                    <p style={styles.marginTop}>{exp.date}</p>
                  </div>
                  <div style={{ ...styles.spaceBetween, ...styles.subHeading }}>
                    <p style={styles.zero}>{exp.subHeading}</p>
                    <p style={styles.zero}> {exp.location}</p>
                  </div>
                  <p style={styles.description}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "projects":
        return (
          <div>
            <p style={styles.sectionHeader}>Projects</p>
            <div style={styles.horizontalLine}></div>
            <div style={styles.educationSection}>
              {data.projects.map((proj) => (
                <div key={crypto.randomUUID()}>
                  <div
                    style={{ ...styles.spaceBetween, ...styles.mainHeading }}
                  >
                    <div style={styles.row}>
                      <a href={proj.link} style={styles.link}>
                        {proj.heading}
                      </a>
                    </div>
                    <p style={styles.marginTop}>{proj.date}</p>
                  </div>
                  <div style={{ ...styles.spaceBetween, ...styles.subHeading }}>
                    <p style={styles.zero}>{proj.subHeading}</p>
                    <p style={styles.zero}>{proj.location}</p>
                  </div>
                  <p style={styles.description}>{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "skills":
        return (
          <div>
            <p style={styles.sectionHeader}>Skills</p>
            <div style={styles.horizontalLine}></div>
            <div style={styles.educationSection}>
              {data.skills.map((skill) => (
                <div key={crypto.randomUUID()}>
                  <p style={styles.zero}>• {skill}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "referees":
        return (
          <div>
            <p style={styles.sectionHeader}>Referees</p>
            <div style={styles.horizontalLine}></div>
            <div style={styles.educationSection}>
              <div style={styles.refereeSection}>
                {data.referees.map((ref) => (
                  <div key={crypto.randomUUID()} style={styles.referee}>
                    <p style={{ ...styles.mainHeading, ...styles.zero }}>
                      {ref.heading}
                    </p>
                    <p style={styles.zero}>{ref.title}</p>
                    <p style={styles.zero}>{ref.company}</p>
                    <p style={styles.zero}>{ref.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.rightSide}>
      <div style={styles.page}>
        {sectionOrder.map((section) => (
          <div key={crypto.randomUUID()}>{makeSection(section)}</div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "16px",
    border: "1px solid black",
    width: "1000px",
    height: "1100px",
  },

  section: {
    margin: "0 10px",
    padding: "10px 10px 5px 10px",
  },
  educationSection: {
    margin: "0 10px",
    padding: "0 10px 5px 10px",
  },
  name: {
    fontWeight: "bold",
    fontSize: "36px",
    margin: "0px 0px 0px 0px",
    padding: "0px",
  },
  personalInformation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "16px",
    flexWrap: "wrap",
  },
  personalInformationChild: {
    marginRight: "auto",
  },
  horizontalLine: {
    margin: "5px 20px",
    height: "0.75px",
    backgroundColor: "black",
  },
  sectionHeader: {
    margin: "0 0 0 10px",
    padding: "0 0 0 10px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeading: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  subHeading: {
    fontStyle: "italic",
  },
  description: {
    margin: "10px 0",
    whiteSpace: "pre-line",
  },
  link: {
    textDecoration: "underline",
    color: "black",
  },
  referee: {
    display: "flex",
    flexDirection: "column",
  },
  refereeSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: "50px",
  },
  marginTop: {
    margin: "0px",
    marginTop: "5px",
    padding: "0px",
  },
  zero: {
    margin: "0px",
    padding: "0px",
  },
};
