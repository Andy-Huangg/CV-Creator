import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Link,
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
                      <Text>
                        <Link style={styles.link} src={edu.link}>
                          {edu.heading}
                        </Link>
                      </Text>
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
});
