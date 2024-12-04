import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const PdfBanks = ({title}) => {

    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#FFFFFF',
            padding: 20,
        },
        container: {
            border: '1px solid black',
            padding: 10,
            fontSize: 10,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        boldText: {
            fontWeight: 'bold',
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
        },
        table: {
            display: 'table',
            width: '100%',
            border: '1px solid black',
            marginTop: 10,
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableCol: {
            width: '20%',
            borderRight: '1px solid black',
            padding: 5,
        },
        tableHeader: {
            width: '20%',
            borderRight: '1px solid black',
            backgroundColor: '#f0f0f0',
            padding: 5,
            fontWeight: 'bold',
        },
        totalRow: {
            flexDirection: 'row',
            borderTop: '1px solid black',
            padding: 5,
        },
        noteSection: {
            borderTop: '1px solid black',
            marginTop: 10,
            paddingTop: 5,
        },
        footer: {
            marginTop: 20,
            textAlign: 'right',
            fontStyle: 'italic',
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>

                    {/* Header */}
                    <View style={styles.header}>
                        <Text>HEAD OFFICE</Text>
                        <Text style={styles.title}>{title}</Text>
                        <Text>Original</Text>
                    </View>

                    {/* Quote Details */}
                    <View style={styles.row}>
                        <Text>Quote No: <Text style={styles.boldText}>1</Text></Text>
                        <Text>Quote Date: <Text style={styles.boldText}>04/11/2024</Text></Text>
                        <Text>Valid Till: <Text style={styles.boldText}>15/11/2024</Text></Text>
                    </View>

                    {/* Recipient Details */}
                    <Text>M/s: <Text style={styles.boldText}>ABARIS SOFTCH PVT. LTD..</Text></Text>
                    <Text>M: 8851746286</Text>

                    {/* Subject and Message */}
                    <Text>Subject: TITLE HERE</Text>
                    <Text>We thank you for giving us the opportunity to Quote for valuable goods. We are pleased to quote you our best rate offer for the same as under.</Text>

                    {/* Notes Section */}
                    <View style={styles.noteSection}>
                        <Text>Notes: Suddep</Text>
                        <Text>Bank: 123 | A/C: 125231184616 | IFSC No: 123</Text>
                    </View>

                    {/* Terms & Conditions */}
                    <Text>Terms & Condition:</Text>
                    <Text>1. Incase item(s) offered have any adverse impact on Environment, Health & Safety, please specify relevant details in your quote categorically. Kindly provide applicable legislation for the same.</Text>

                    {/* Footer */}
                    <Text style={styles.footer}>HEAD OFFICE</Text>
                    <Text style={styles.footer}>( Authorized Signatory )</Text>
                </View>
            </Page>
        </Document>
    );
}

export default PdfBanks;
