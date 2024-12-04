import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const BankBookPdf = () => {
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
        sectionHeader: {
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 10,
            textAlign: 'left',
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
        closingBalance: {
            flex: 1,
            textAlign: 'right',
            fontWeight: 'bold',
            fontSize: 10,
            paddingRight: 5,
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
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <View style={styles.sectionHeader}>
                        <Text>Hsfc Bank As on Date 08/10/2024</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Opening</Text>
                            <Text style={styles.tableCol}>284937.00</Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.closingBalance}>285437.00 Cr Closing Balance</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Demo TEST</Text>
                            <Text style={styles.tableCol}>500.00</Text>
                            <Text style={styles.tableCol}>500.00</Text>
                            <Text style={styles.tableCol}></Text>
                        </View>
                    </View>
                    <View style={styles.sectionHeader}>
                        <Text>Hsfc Bank As on Date 12/04/2024</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Opening</Text>
                            <Text style={styles.tableCol}>285437.00</Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.closingBalance}>284937.00 Cr Closing Balance</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Demo TEST</Text>
                            <Text style={styles.tableCol}>500.00</Text>
                            <Text style={styles.tableCol}>500.00</Text>
                            <Text style={styles.tableCol}></Text>
                        </View>
                    </View>
                    <View style={styles.sectionHeader}>
                        <Text>Hsfc Bank As on Date 14/10/2024</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Opening</Text>
                            <Text style={styles.tableCol}>275537.00</Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.closingBalance}>275642.00 Cr Closing Balance</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>A K Agro Center</Text>
                            <Text style={styles.tableCol}>105.00</Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.tableCol}></Text>
                        </View>
                    </View>
                    <View style={styles.sectionHeader}>
                        <Text>Hsfc Bank As on Date 17/08/2024</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Opening</Text>
                            <Text style={styles.tableCol}>284937.00</Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.closingBalance}>285537.00 Cr Closing Balance</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Demo TEST</Text>
                            <Text style={styles.tableCol}>600.00</Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.tableCol}></Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default BankBookPdf;
