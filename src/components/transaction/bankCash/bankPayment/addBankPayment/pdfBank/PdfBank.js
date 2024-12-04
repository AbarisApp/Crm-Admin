import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const PdfBank = () => {

    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#FFFFFF',
            padding: 20
        },
        container: {
            border: '1px solid black',
            padding: 10,
            fontSize: 10
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
        },
        boldText: {
            fontWeight: 'bold',
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
        },
        underlineText: {
            textDecoration: 'underline',
        },
        textCenter: {
            textAlign: 'center',
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
        <>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.container}>

                        <View style={styles.header}>
                            <Text>Vou No. : <Text style={styles.boldText}>10</Text></Text>
                            <Text style={styles.boldText}>Bank Payment</Text>
                            <Text>Date : <Text style={styles.boldText}>30/10/2024</Text></Text>
                        </View>


                        <Text>M/s, <Text style={styles.boldText}>Mustafa Ashraf</Text></Text>
                        <Text>Dear Sir,</Text>
                        <Text>
                            Please find here with our Cheque/DD. No. <Text style={styles.underlineText}>__________</Text> Dated : <Text style={styles.underlineText}>__________</Text> drawn on Hsfc Bank in your favour for Rs. <Text style={styles.boldText}>100.00 /-</Text>
                        </Text>


                        <View style={styles.row}>
                            <Text>Rs. (in words): <Text style={styles.underlineText}>One Hundred Only</Text></Text>
                        </View>


                        <View style={styles.row}>
                            <Text>Against advance/full/part payment of your Bill No.</Text>
                            <Text>Dt: __________</Text>
                        </View>


                        <View style={styles.noteSection}>
                            <Text>Note :</Text>
                            <Text style={styles.boldText}>HEAD OFFICE</Text>
                        </View>


                        <Text style={styles.footer}>( Authorized Signatory )</Text>
                    </View>
                </Page>
            </Document>
        </>
    );
}

export default PdfBank