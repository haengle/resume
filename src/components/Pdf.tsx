import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Experience from './Experience';
import Certifications from './Certifications';
import { workExperience, certifications } from '../data/resume';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    experience: {
        margin: 10,
        paddingBottom: 15,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottom: '2px solid #000'
    },
    title: {
        fontSize: '20px',
        flex: '0 1 500px',
    },
    date: {
        marginLeft: 'auto',
        flex: '0 1 100px',
        fontSize: '10px',
        textAlign: 'right'
    },
    company: {
        flex: '1 1 100%',
        fontSize: '14px'
    },
    list: {
        fontSize: '12px',
        marginBottom: 5,
    }
  });

  const MyDocument = () => (
    <PDFViewer width={'100%'} height={'1000px'}>
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                {workExperience.map((job, index: number) => {
                    return (
                        <View style={styles.experience}>
                            <Text style={styles.title}>{job.title}</Text>
                            <Text style={styles.date}>{job.dates}</Text>
                            <Text style={styles.company}>{job.company} | {job.location}</Text>
                            <View>
                                {job.description && job.description.map((point, index: number) => {
                            return <Text style={styles.list} key={index}>{point}</Text>
                        })
                        }
                            </View>
                        </View>
                    )
                })}
                </View>
            </Page>
        </Document>
    </PDFViewer>
  );

  export default MyDocument;