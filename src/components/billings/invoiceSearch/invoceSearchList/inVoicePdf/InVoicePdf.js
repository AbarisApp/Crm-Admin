import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const InVoicePdf = () => {
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
            marginBottom: 10,
        },
        title: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 14,
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
        table: {
            marginTop: 10,
            borderTop: '1px solid black',
            paddingTop: 5,
        },
        tableHeader: {
            flexDirection: 'row',
            borderBottom: '1px solid black',
            paddingBottom: 5,
            marginBottom: 5,
        },
        tableColumn: {
            flex: 1,
            fontSize: 10,
            fontWeight: 'bold',
        },
        tableRow: {
            flexDirection: 'row',
            marginBottom: 5,
        },
        tableCell: {
            flex: 1,
            fontSize: 10,
        },
        footer: {
            marginTop: 20,
            fontSize: 10,
            textAlign: 'center',
        },
        terms: {
            marginTop: 20,
            fontSize: 9,
        },
        totalContainer: {
            marginTop: 20,
            textAlign: 'right',
        },
        qrCode: {
            marginTop: 10,
            textAlign: 'center',
        },
    });
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    {/* Title */}
                    <Text style={styles.title}>TAX INVOICE</Text>

                    {/* Header */}
                    <View style={styles.header}>
                        <View>
                            <Text>To:</Text>
                            <Text style={styles.boldText}>ABDUL</Text>
                            <Text>Rajasthan</Text>
                        </View>
                        <View style={{ textAlign: 'right' }}>
                            <Text>Invoice Date:</Text>
                            <Text style={styles.boldText}>16/12/2024</Text>
                        </View>
                    </View>

                    {/* Invoice Number */}
                    <View style={styles.row}>
                        <Text>Invoice #:</Text>
                        <Text style={styles.boldText}>0002</Text>
                    </View>

                    {/* Table */}
                    <View style={styles.table}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableColumn}>Description</Text>
                            <Text style={styles.tableColumn}>Details</Text>
                            <Text style={styles.tableColumn}>Amount</Text>
                        </View>

                        {/* Table Row */}
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>Accommodation</Text>
                            <Text style={styles.tableCell}>
                                UDAI KOTHI
                                \nUDAIPUR, India
                                \nCheck-In: 16/12/24 Check-Out: 18/12/24
                            </Text>
                            <Text style={styles.tableCell}>4,542.37</Text>
                        </View>
                    </View>

                    {/* Tax Summary */}
                    <View style={styles.table}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableColumn}>SAC</Text>
                            <Text style={styles.tableColumn}>Taxable</Text>
                            <Text style={styles.tableColumn}>CGST</Text>
                            <Text style={styles.tableColumn}>SGST</Text>
                            <Text style={styles.tableColumn}>IGST</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>998552</Text>
                            <Text style={styles.tableCell}>4,542.37</Text>
                            <Text style={styles.tableCell}>0</Text>
                            <Text style={styles.tableCell}>0</Text>
                            <Text style={styles.tableCell}>457.63</Text>
                        </View>
                    </View>

                    {/* Total */}
                    <View style={styles.totalContainer}>
                        <Text>Total: ₹5,000.00</Text>
                    </View>

                    {/* QR Code Section */}
                    <View style={styles.qrCode}>
                        <Text>[QR Code Placeholder]</Text>
                    </View>

                    {/* Terms and Conditions */}
                    <View style={styles.terms}>
                        <Text>Terms and Conditions:</Text>
                        <Text>1. All Payments in cash should be made against company's receipt only.</Text>
                        <Text>2. No claim or discrepancy shall be considered not sent in writing within three days of this bill.</Text>
                        <Text>3. Dispute shall be subject to the jurisdiction of courts in Jaipur only.</Text>
                        <Text>4. Interest will be charged @24% PA for delayed payment.</Text>
                    </View>

                    {/* Footer */}
                    <Text style={styles.footer}>This is an electronically generated invoice & does not require a physical signature.</Text>
                </View>
            </Page>
        </Document>
    )
}

export default InVoicePdf