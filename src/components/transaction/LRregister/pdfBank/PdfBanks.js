import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const PdfBanks = ({ val }) => {
    console.log('val', val);

    const data = {
        header: {
            headOffice: "HEAD OFFICE",
            title: "EPIC TRANSPORT CARRIER",
            original: "Original",
        },
        quoteDetails: {
            quoteNo: val?.quote_no,
            quotationNo: val?.quotation_no,
            OrderDate: val?.createdAt,
            validTill: val?.valid_till,
        },
        recipient: {
            name: val?.prj_id,
            contact: "--",
        },
        subject: val?.subject,
        items: [],
        totals: {
            totalQty: val?.product_amount,
            subTotal: val?.product_amount,
            grandTotal: val?.product_amount,
        },
        rupees: "--",
        notes: val?.narration,
        bankDetails: {
            bank: "123",
            account: "23",
            ifsc: "123",
        },
        terms: [
            "1. Incase item(s) offered the same.",
        ],
    };

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
        },
        flexb: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>

                    {/* Header */}
                    <View style={styles.header}>
                        <Text>{data.header.headOffice}</Text>
                        <Text style={styles.title}>{data.header.title}</Text>
                        <Text>{data.header.original}</Text>
                    </View>

                   

                    {/* Table */}
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeader}>No.</Text>
                            <Text style={styles.tableHeader}>Lr Date</Text>
                            <Text style={styles.tableHeader}>LrNo</Text>
                            <Text style={styles.tableHeader}>Freight</Text>
                            <Text style={styles.tableHeader}>City</Text>
                            <Text style={styles.tableHeader}>To City</Text>
                            <Text style={styles.tableHeader}>Consign</Text>
                            <Text style={styles.tableHeader}>Consign</Text>
                            <Text style={styles.tableHeader}>Consign</Text>
                            <Text style={styles.tableHeader}>Truck No</Text>
                            <Text style={styles.tableHeader}>Article</Text>
                            <Text style={styles.tableHeader}>Weight</Text>
                        </View>

                        {data.items.map((item, index) => (
                            <View style={styles.tableRow} key={index}>
                                <Text style={styles.tableCol}>{item.no}</Text>
                                <Text style={styles.tableCol}>{item.particular}</Text>
                                <Text style={styles.tableCol}>{item.qty}</Text>
                                <Text style={styles.tableCol}>{item.unit}</Text>
                                <Text style={styles.tableCol}>{item.rate}</Text>
                                <Text style={styles.tableCol}>{item.amount}</Text>
                            </View>
                        ))}

                        {/* Total Row */}
                     
                        <View style={styles.totalRow}>
                            <Text style={{ width: '80%' }}>Grand Total</Text>
                            <Text style={{ width: '20%' }}>{data.totals.grandTotal}</Text>
                        </View>
                    </View>

                    {/* Amount in Words */}

                    {/* Footer */}
                    <Text style={styles.footer}>{data.header.headOffice}</Text>
                    <Text style={styles.footer}>( Authorized Signatory )</Text>
                </View>
            </Page>
        </Document>
    );
}

export default PdfBanks;