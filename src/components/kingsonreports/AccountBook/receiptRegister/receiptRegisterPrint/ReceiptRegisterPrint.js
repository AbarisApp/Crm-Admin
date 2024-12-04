import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const ReceiptRegisterPrint = () => {
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
        headerRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
        },
        headerCol: {
            flexDirection: 'column',
        },
        title: {
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 5,
        },
        dateText: {
            textAlign: 'right',
        },
        subject: {
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 10,
            textDecoration: 'underline',
        },
        table: {
            display: 'table',
            width: '100%',
            border: '1px solid black',
            marginTop: 10,
        },
        tableRow: {
            flexDirection: 'row',
            borderBottom: '1px solid black',
        },
        tableHeader: {
            flex: 1,
            borderRight: '1px solid black',
            backgroundColor: '#f0f0f0',
            padding: 5,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        tableCol: {
            flex: 1,
            borderRight: '1px solid black',
            padding: 5,
            textAlign: 'center',
        },
        tableColError: {
            flex: 1,
            border: '1px solid red',
            padding: 5,
            color: 'red',
        },
        signature: {
            textAlign: 'right',
            marginTop: 20,
            fontWeight: 'bold',
        },
        footer: {
            textAlign: 'center',
            fontSize: 10,
            marginTop: 50,
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text>HEAD OFFICE</Text>

                </View>

                <View style={styles.headerRow}>
                    <View style={styles.headerCol}>
                        <Text>Account No : 125231184616</Text>
                        <Text>Bank Name : 123</Text>
                        <Text>Branch Name : NEW</Text>
                    </View>
                    <Text style={styles.dateText}>Date: 08-11-2024</Text>
                </View>
                <Text style={styles.subject}>Sub : Cheque Deposit</Text>


                <Text>Dear Sir,</Text>
                <Text>
                    We bring to your kind attention towards our following Cheque and would request you to kindly deposit the cheque in.
                </Text>


                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>SrN</Text>
                        <Text style={styles.tableHeader}>Account Name</Text>
                        <Text style={styles.tableHeader}>Party Bank Name</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>1</Text>
                        <Text style={styles.tableCol}>ABC PARTY</Text>
                        <Text style={styles.tableColError}>

                        </Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>2</Text>
                        <Text style={styles.tableCol}>Demo Dmeo</Text>
                        <Text style={styles.tableColError}>

                        </Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>3</Text>
                        <Text style={styles.tableCol}>Demo TEST</Text>
                        <Text style={styles.tableColError}>

                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.signature}>Yours FaithFully</Text>
                    <Text style={styles.signature}>For HEAD OFFICE</Text>
                    <Text style={styles.signature}>Manager / Accountant</Text>
                </View>

                <Text style={styles.footer}>eCount Software - www.eCount.in</Text>
            </Page>
        </Document>
    );
}

export default ReceiptRegisterPrint;
