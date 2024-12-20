import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const PdfBanks = ({ val }) => {
    const data = {
        header: "EPIC TRANSPORT CARRIER",
        period: "From 01-04-2024 To 31-03-2025",
        tableHeaders: [
            "Lr Date", "LrNo", "Freight", "City", "To City", "Consign", "Consign",
            "Truck No", "Article", "Weight", "Freight", "BC", "Hamali",
            "OtherCh", "SubTotal", "GST By", "GST Amo", "Total Frei"
        ],
        tableRows: [
            {
                lrDate: "20/05/20",
                lrNo: "29409",
                freight: "To Pay",
                city: "DELHI",
                toCity: "AMRITSAR",
                consignor: "DNV",
                consignee: "SELF",
                truckNo: "06AAEC",
                article: "7.00",
                weight: "58.000",
                freightAmt: "700.00",
                bc: "100.00",
                hamali: "100.00",
                otherCharges: "0.00",
                subTotal: "900.00",
                gstBy: "Consignee",
                gstAmount: "0.00",
                totalFreight: "900.00",
            },
            // Add the rest of the rows as shown in the image
        ],
        totals: {
            articles: "33.00",
            weight: "158.000",
            freight: "4,050.00",
            bc: "400.00",
            hamali: "100.00",
            subtotal: "4,550.00",
            gst: "0.00",
            totalFreight: "4,550.00",
        },
    };

    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#FFFFFF',
            padding: 20,
        },
        header: {
            textAlign: 'center',
            marginBottom: 10,
            fontSize: 14,
            fontWeight: 'bold',
        },
        period: {
            textAlign: 'center',
            marginBottom: 10,
            fontSize: 10,
        },
        table: {
            display: 'table',
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: 10,
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableHeader: {
            border: '1px solid black',
            padding: 5,
            fontWeight: 'bold',
            fontSize: 9,
            textAlign: 'center',
        },
        tableCell: {
            border: '1px solid black',
            padding: 5,
            fontSize: 8,
            textAlign: 'center',
        },
        totalsRow: {
            flexDirection: 'row',
            borderTop: '2px solid black',
            fontWeight: 'bold',
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <Text style={styles.header}>{data.header}</Text>
                <Text style={styles.period}>{data.period}</Text>

                {/* Table */}
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        {data.tableHeaders.map((header, index) => (
                            <Text key={index} style={styles.tableHeader}>{header}</Text>
                        ))}
                    </View>

                    {/* Table Rows */}
                    {data?.tableRows.map((row, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{row.lrDate}</Text>
                            <Text style={styles.tableCell}>{row.lrNo}</Text>
                            <Text style={styles.tableCell}>{row.freight}</Text>
                            <Text style={styles.tableCell}>{row.city}</Text>
                            <Text style={styles.tableCell}>{row.consignor}</Text>
                           
                        </View>
                    ))}

                    {/* Totals Row */}
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>Total</Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                       
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfBanks;
