import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const SalesChallan = ({ title, challanNumber, date, recipientName, mobile, transport, items }) => {

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
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        subTitle: {
            fontSize: 12,
            textAlign: 'center',
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
            display: 'table',
            width: '100%',
            border: '1px solid black',
            marginTop: 10,
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableCol: {
            width: '15%',
            borderRight: '1px solid black',
            padding: 5,
        },
        tableColWide: {
            width: '40%',
            borderRight: '1px solid black',
            padding: 5,
        },
        tableHeader: {
            width: '15%',
            borderRight: '1px solid black',
            backgroundColor: '#f0f0f0',
            padding: 5,
            fontWeight: 'bold',
        },
        tableHeaderWide: {
            width: '40%',
            borderRight: '1px solid black',
            backgroundColor: '#f0f0f0',
            padding: 5,
            fontWeight: 'bold',
        },
        footerRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
            borderTop: '1px solid black',
        },
        noteSection: {
            borderTop: '1px solid black',
            marginTop: 10,
            paddingTop: 5,
        },
        footer: {
            marginTop: 20,
            textAlign: 'center',
            fontStyle: 'italic',
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.boldText}>HEAD OFFICE</Text>
                        <Text style={styles.title}>{title}</Text>
                        <Text>Original</Text>
                    </View>

                    {/* Challan and Date */}
                    <View style={styles.row}>
                        <Text>Challan No.: <Text style={styles.boldText}>{challanNumber || '1'}</Text></Text>
                        <Text>Date: <Text style={styles.boldText}>{date || '05/11/2024'}</Text></Text>
                        <Text>Transport: <Text style={styles.boldText}>{transport || 'SUSHOBHIT'}</Text></Text>
                    </View>

                    {/* Recipient Details */}
                    <View style={styles.row}>
                        <Text>M/s: <Text style={styles.boldText}>{recipientName || 'Abaris Softech'}</Text></Text>
                        <Text>M: <Text style={styles.boldText}>{mobile || '9586300500'}</Text></Text>
                    </View>

                    {/* Table Header */}
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeader}>No.</Text>
                            <Text style={styles.tableHeaderWide}>Particular</Text>
                            <Text style={styles.tableHeader}>Qty</Text>
                            <Text style={styles.tableHeader}>Unit</Text>
                            <Text style={styles.tableHeader}>Rate</Text>
                            <Text style={styles.tableHeader}>Amount</Text>
                        </View>

                        {/* Table Rows */}
                        {items?.map((item, index) => (
                            <View style={styles.tableRow} key={index}>
                                <Text style={styles.tableCol}>{index + 1}</Text>
                                <Text style={styles.tableColWide}>{item.particular}</Text>
                                <Text style={styles.tableCol}>{item.qty}</Text>
                                <Text style={styles.tableCol}>{item.unit}</Text>
                                <Text style={styles.tableCol}>{item.rate.toFixed(2)}</Text>
                                <Text style={styles.tableCol}>{(item.qty * item.rate).toFixed(2)}</Text>
                            </View>
                        ))}

                        {/* Total Row */}
                        <View style={styles.footerRow}>
                            <Text>Total</Text>
                            <Text>0.00</Text>
                        </View>
                    </View>

                    {/* Footer Notes */}
                    <Text>Terms & Conditions: </Text>
                    <Text style={styles.footer}>(Authorized Signatory)</Text>
                </View>
            </Page>
        </Document>
    );
};

export default SalesChallan;
