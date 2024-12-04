import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const AccountLedgerPdf = () => {
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
            textAlign: 'center',
            marginBottom: 10,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
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
        totalRow: {
            flexDirection: 'row',
            borderTop: '1px solid black',
            padding: 5,
            fontWeight: 'bold',
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
                    <View style={styles.header}>
                        <Text>HEAD OFFICE</Text>
                        <Text style={styles.title}>Account Statement</Text>
                        <Text>For Ashraf Center</Text>
                        <Text>From 08/11/2024 To 31/03/2025</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeader}>Date</Text>
                            <Text style={styles.tableHeader}>Particular</Text>
                            <Text style={styles.tableHeader}>Credit</Text>
                            <Text style={styles.tableHeader}>Debit</Text>
                            <Text style={styles.tableHeader}>Closing</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>01/04/2024</Text>
                            <Text style={styles.tableCol}>Opening</Text>
                            <Text style={styles.tableCol}>0.00</Text>
                            <Text style={styles.tableCol}>43952.10</Text>
                            <Text style={styles.tableCol}>43952.10 Db</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>14/10/2024</Text>
                            <Text style={styles.tableCol}>A K Agro Center</Text>
                            <Text style={styles.tableCol}>118.00</Text>
                            <Text style={styles.tableCol}>0.00</Text>
                            <Text style={styles.tableCol}>43834.10 Db</Text>
                        </View>
                        <View style={styles.totalRow}>
                            <Text style={{ flex: 3 }}>Total</Text>
                            <Text style={{ flex: 1 }}>Total Credit</Text>
                            <Text style={{ flex: 1 }}>Total Debit</Text>
                            <Text style={{ flex: 1 }}>Final Balance</Text>
                        </View>
                    </View>
                    {/* Footer */}
                    {/* <Text style={styles.footer}>HEAD OFFICE</Text>
                    <Text style={styles.footer}>( Authorized Signatory )</Text> */}
                </View>
            </Page>
        </Document>
    );
}

export default AccountLedgerPdf;
