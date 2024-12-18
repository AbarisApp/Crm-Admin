import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const ChallanReturnPdf = ({ val }) => {
    console.log('val', val);

    const data = {
        header: {
            headOffice: "HEAD OFFICE",
            title: "(Challan Return)",
            original: "Original",
        },
        quoteDetails: {
            challanNo: val?.challan_no,
            challanDate: val?.createdAt,
            transport: val?.transporter,
            lrNo: val?.lr_no,
        },
        recipient: {
            name: val?.prj_id?.project_name,
            contact: "--",
        },
        subject: val?.narration,
        items: val?.products?.map((item, i) => {
            return {
                no: i + 1,
                particular: item?.product_id,
                qty: item?.quantity,
                unit: "",
                rate: item?.rate,
                amount: item?.amount,
            }
        }),
        totals: {
            totalQty: val?.product_amount,
            subTotal: val?.product_amount,
            grandTotal: val?.product_amount,
        },
        rupees: "--",
        notes: val?.narration,
        bankDetails: {
            bank: "123",
            account: "125231184616",
            ifsc: "123",
        },
        terms: [
            "1. Incase item(s) offered have any adverse impact on Environment, Health & Safety, please specify relevant details in your quote categorically. Kindly provide applicable legislation for the same.",
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

                    {/* Quote Details */}
                    <View style={styles.flexb}>
                        <View>
                            <Text>M/s: <Text style={styles.boldText}>{data.recipient.name}</Text></Text>
                            <Text>M: {data.recipient.contact}</Text>
                        </View>
                        <View >
                            <Text>Challan No: <Text style={styles.boldText}>{data.quoteDetails.challanNo}</Text></Text>
                            <Text>Challan Date: <Text style={styles.boldText}>{data.quoteDetails.challanDate}</Text></Text>
                        </View>
                    </View>

                    {/* Table */}
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeader}>No.</Text>
                            <Text style={styles.tableHeader}>Product</Text>
                            <Text style={styles.tableHeader}>Qty</Text>
                            <Text style={styles.tableHeader}>Unit</Text>
                            <Text style={styles.tableHeader}>Rate</Text>
                            <Text style={styles.tableHeader}>Amount</Text>
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
                        {/* <View style={styles.totalRow}>
                            <Text style={{ width: '80%' }}>Total Qty</Text>
                            <Text style={{ width: '20%' }}>{data.totals.totalQty}</Text>
                        </View> */}
                        <View style={styles.totalRow}>
                            <Text style={{ width: '80%' }}>Sub Total</Text>
                            <Text style={{ width: '20%' }}>{data.totals.subTotal}</Text>
                        </View>
                        <View style={styles.totalRow}>
                            <Text style={{ width: '80%' }}>Grand Total</Text>
                            <Text style={{ width: '20%' }}>{data.totals.grandTotal}</Text>
                        </View>
                    </View>

                    {/* Amount in Words */}
                    {/* <Text>Rupees: {data.rupees}</Text> */}

                    {/* Notes Section */}
                    <View style={styles.noteSection}>
                        <Text>Narration: {data.notes}</Text>
                    </View>

                    {/* Terms & Conditions */}
                    <Text>Terms & Condition:</Text>
                    {data.terms.map((term, index) => (
                        <Text key={index}>{term}</Text>
                    ))}

                    {/* Footer */}
                    <Text style={styles.footer}>{data.header.headOffice}</Text>
                    <Text style={styles.footer}>( Authorized Signatory )</Text>
                </View>
            </Page>
        </Document>
    );
}

export default ChallanReturnPdf;