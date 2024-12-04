import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const PdfBanks = ({ title }) => {
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
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
        },
        table: {
            display: 'table',
            width: '100%',
            marginTop: 10,
            border: '1px solid black',
        },
        tableRow: {
            flexDirection: 'row',
            borderBottom: '1px solid black',
        },
        tableCol: {
            flex: 1,
            borderRight: '1px solid black',
            padding: 5,
        },
        tableColWide: {
            flex: 2,
            borderRight: '1px solid black',
            padding: 5,
        },
        tableHeader: {
            backgroundColor: '#f0f0f0',
            fontWeight: 'bold',
        },
        footer: {
            marginTop: 20,
            fontSize: 10,
            textAlign: 'center',
        },
        noteSection: {
            marginTop: 10,
            fontSize: 10,
            borderTop: '1px solid black',
            paddingTop: 5,
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    {/* Header */}
                    <Text style={styles.header}>HEAD OFFICE {title}</Text>
                    <Text style={styles.header}>{title}</Text>

                    {/* Order Info */}
                    <View style={styles.row}>
                        <Text>Order No.: <Text style={{ fontWeight: 'bold' }}>12</Text></Text>
                        <Text>Order Date: <Text style={{ fontWeight: 'bold' }}>29/11/2024</Text></Text>
                    </View>

                    {/* Customer Details */}
                    <Text>M/s: Abaris Softech.</Text>
                    <Text>Address: Delhi</Text>
                    <Text>M: 884356563</Text>

                    {/* Table */}
                    <View style={styles.table}>
                        {/* Header Row */}
                        <View style={[styles.tableRow, styles.tableHeader]}>
                            <Text style={styles.tableCol}>No.</Text>
                            <Text style={styles.tableColWide}>Particular</Text>
                            <Text style={styles.tableCol}>Qty</Text>
                            <Text style={styles.tableCol}>Unit</Text>
                            <Text style={styles.tableCol}>Rate</Text>
                            <Text style={styles.tableCol}>Amount</Text>
                        </View>
                        {/* Sample Data Row */}
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>1</Text>
                            <Text style={styles.tableColWide}>DRAGON 1 LTR</Text>
                            <Text style={styles.tableCol}>2</Text>
                            <Text style={styles.tableCol}>-</Text>
                            <Text style={styles.tableCol}>0.00</Text>
                            <Text style={styles.tableCol}>0.00</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>2</Text>
                            <Text style={styles.tableColWide}>ACID SLURY</Text>
                            <Text style={styles.tableCol}>8</Text>
                            <Text style={styles.tableCol}>-</Text>
                            <Text style={styles.tableCol}>200.00</Text>
                            <Text style={styles.tableCol}>200.00</Text>
                        </View>
                    </View>

                    {/* Totals */}
                    <View style={[styles.row, { marginTop: 10 }]}>
                        <Text>Total Qty: 10.00</Text>
                        <Text>Sub Total: 200.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Grand Total: 200.00</Text>
                    </View>

                    {/* Notes */}
                    <View style={styles.noteSection}>
                        <Text>Notes: Thanks</Text>
                        <Text>Terms & Condition: HEAD OFFICE</Text>
                    </View>

                    {/* Footer */}
                    <Text style={styles.footer}>( Authorized Signatory )</Text>
                </View>
            </Page>
        </Document>
    );
};

export default PdfBanks;
