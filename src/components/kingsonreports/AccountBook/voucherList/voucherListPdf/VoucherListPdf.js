import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const VoucherListPdf = () => {
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
        errorBox: {
            border: '1px solid red',
            padding: 5,
            color: 'red',
            marginBottom: 10,
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
                    {/* Error Box for Missing Image */}

                    {/* Header Section */}
                    <View style={styles.header}>
                        <Text style={styles.title}>HEAD OFFICE</Text>
                        {/* Uncomment and provide local path to use a logo */}
                        {/* <Image src={'/path/to/logo.png'} style={{ width: 50, height: 50 }} /> */}
                    </View>

                    {/* Table Section */}
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeader}>Voucher Type</Text>
                            <Text style={styles.tableHeader}>Last Date</Text>
                            <Text style={styles.tableHeader}>Total</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Bank Payment</Text>
                            <Text style={styles.tableCol}>30/10/2024</Text>
                            <Text style={styles.tableCol}>12</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Bank Receipt</Text>
                            <Text style={styles.tableCol}>18/10/2024</Text>
                            <Text style={styles.tableCol}>3</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Cash Payment</Text>
                            <Text style={styles.tableCol}>29/10/2024</Text>
                            <Text style={styles.tableCol}>3</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Contra</Text>
                            <Text style={styles.tableCol}>14/10/2024</Text>
                            <Text style={styles.tableCol}>1</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>Sales Invoice</Text>
                            <Text style={styles.tableCol}>21/05/2024</Text>
                            <Text style={styles.tableCol}>2</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>GST Expense Entry</Text>
                            <Text style={styles.tableCol}>14/10/2024</Text>
                            <Text style={styles.tableCol}>2</Text>
                        </View>
                        <View style={styles.totalRow}>
                            <Text style={{ flex: 2 }}>Total</Text>
                            <Text style={{ flex: 1 }}>23</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}

export default VoucherListPdf;
