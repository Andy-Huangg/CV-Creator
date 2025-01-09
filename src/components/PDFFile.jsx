import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Link,
  Svg,
  Path,
} from "@react-pdf/renderer";

export default function PDFFile({ data, sectionOrder }) {
  const makeSection = (section) => {
    switch (section) {
      case "personalInfo":
        return (
          <View>
            <View style={[styles.section]}>
              <View style={styles.name}>
                <Text>{data.name}</Text>
              </View>
              <View style={styles.personalInformation}>
                <Text style={styles.personalInformationChild}>
                  {data.email}
                </Text>
                <Text style={styles.personalInformationChild}>
                  {data.phone}
                </Text>
                <Text style={styles.personalInformationChild}>
                  {data.location}
                </Text>
                <Text style={styles.personalInformationChild}>
                  {data.github}
                </Text>
              </View>
            </View>
            <View style={styles.horizontalLine}></View>
          </View>
        );
      case "education":
        return (
          <View>
            <Text style={styles.sectionHeader}>Education</Text>
            <View style={styles.horizontalLine}></View>
            <View style={styles.educationSection}>
              {data.education.map((edu) => {
                return (
                  <View key={crypto.randomUUID()}>
                    <View style={[styles.spaceBetween, styles.mainHeading]}>
                      <Text>{edu.heading}</Text>
                      <Text>{edu.date}</Text>
                    </View>

                    <View style={[styles.spaceBetween, styles.subHeading]}>
                      <Text>{edu.subHeading}</Text>
                      <Text>{edu.location}</Text>
                    </View>

                    <Text style={styles.description}>{edu.description}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      case "experience":
        return (
          <View>
            <Text style={styles.sectionHeader}>Work Experience</Text>
            <View style={styles.horizontalLine}></View>
            <View style={styles.educationSection}>
              {data.experience.map((edu) => {
                return (
                  <View key={crypto.randomUUID()}>
                    <View style={[styles.spaceBetween, styles.mainHeading]}>
                      <Text>{edu.heading}</Text>
                      <Text>{edu.date}</Text>
                    </View>

                    <View style={[styles.spaceBetween, styles.subHeading]}>
                      <Text>{edu.subHeading}</Text>
                      <Text>{edu.location}</Text>
                    </View>

                    <Text style={styles.description}>{edu.description}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      case "projects":
        return (
          <View>
            <Text style={styles.sectionHeader}>Projects</Text>
            <View style={styles.horizontalLine}></View>
            <View style={styles.educationSection}>
              {data.projects.map((edu) => {
                return (
                  <View key={crypto.randomUUID()}>
                    <View style={[styles.spaceBetween, styles.mainHeading]}>
                      <View style={styles.row}>
                        <Link style={styles.link} src={edu.link}>
                          {edu.heading}
                        </Link>
                        <Svg viewBox="0 0 24 24" width="10" height="10">
                          <Path
                            stroke="rgb(0,0,0)"
                            strokeWidth={1}
                            d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"
                          />
                        </Svg>
                      </View>

                      <Text>{edu.date}</Text>
                    </View>

                    <View style={[styles.spaceBetween, styles.subHeading]}>
                      <Text>{edu.subHeading}</Text>
                      <Text>{edu.location}</Text>
                    </View>

                    <Text style={styles.description}>{edu.description}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        );

      case "skills":
        return (
          <View>
            <Text style={styles.sectionHeader}>Skills</Text>
            <View style={styles.horizontalLine}></View>
            <View style={styles.educationSection}>
              {data.skills.map((edu) => {
                return (
                  <View key={crypto.randomUUID()}>
                    <Text style={styles.skill}>• {edu}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      case "referees":
        return (
          <View>
            <Text style={styles.sectionHeader}>Referees</Text>
            <View style={styles.horizontalLine}></View>
            <View style={styles.educationSection}>
              <View style={styles.refereeSection}>
                {data.referees.map((edu) => {
                  return (
                    <View key={crypto.randomUUID()} style={styles.referee}>
                      <Text style={styles.mainHeading}>{edu.heading}</Text>
                      <Text>{edu.title}</Text>
                      <Text>{edu.company}</Text>
                      <Text>{edu.phone}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <Document>
      <Page size="A4" style={[styles.page]}>
        {sectionOrder.map((section) => (
          <View key={section}>{makeSection(section)}</View>
        ))}
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    fontFamily: "Helvetica",
    fontSize: "12px",
    border: "1px solid black",
  },
  section: {
    margin: "0 10 0 10",
    padding: "10 10 5 10",
  },
  educationSection: {
    margin: "0 10 0 10",
    padding: "0 10 5 10",
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    fontSize: "28px",
  },
  personalInformation: {
    marginTop: "5px",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "10px",
    flexWrap: "wrap",
  },
  personalInformationChild: {
    marginRight: "auto",
  },
  horizontalLine: {
    marginVertical: 5,
    height: 0.75,
    marginLeft: "20px",
    marginRight: "20px",
    backgroundColor: "black",
  },
  sectionHeader: {
    margin: "0 0 0 10",
    padding: "0 0 0 10",
    fontFamily: "Times-Bold",
    fontSize: "16px",
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
    fontFamily: "Helvetica-Bold",
  },
  subHeading: {
    fontFamily: "Helvetica-Oblique",
  },
  description: {
    marginVertical: "10px",
  },
  link: {
    textDecoration: "underline",
    color: "black",
  },
  skill: {},
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
});
