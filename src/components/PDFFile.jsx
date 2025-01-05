import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import dino from "/dinosaur.png";

export default function PDFFile({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.section]}>
          <View style={styles.name}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.personalInformation}>
            <Text>{data.email}</Text>
            <Text>{data.phone}</Text>
            <Text>{data.location}</Text>
            <Text>{data.github}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    fontFamily: "Helvetica",
  },
  section: {
    margin: 10,
    padding: 10,
    border: "1px solid black",
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
});
