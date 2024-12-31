import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import dino from "/dinosaur.png";

const PDFFile = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.section, styles.view]}>
          <Text>Section #1</Text>
          <Image src={dino}></Image>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  view: {
    border: "1px solid black",
  },
});

export default PDFFile;
