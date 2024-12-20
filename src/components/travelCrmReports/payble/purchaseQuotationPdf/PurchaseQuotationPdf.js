import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const AccountStatementPdf = ({ data }) => {
    const styles = StyleSheet.create({
        page: {
            padding: 20,
            fontSize: 10,
            backgroundColor: '#fff',
        },
        header: {
            textAlign: 'center',
            marginBottom: 20,
        },
        title: {
            fontSize: 14,
            fontWeight: 'bold',
        },
        subTitle: {
            fontSize: 12,
        },
        table: {
            width: '100%',
            border: '1px solid black',
            marginTop: 10,
        },
        tableRow: {
            flexDirection: 'row',
            borderBottom: '1px solid black',
        },
        tableHeader: {
            fontWeight: 'bold',
            backgroundColor: '#f0f0f0',
            padding: 5,
            borderRight: '1px solid black',
        },
        tableCell: {
            padding: 5,
            borderRight: '1px solid black',
        },
        tableFooter: {
            flexDirection: 'row',
            padding: 5,
            fontWeight: 'bold',
            borderTop: '1px solid black',
        },
        closingBalance: {
            marginTop: 20,
            textAlign: 'right',
            fontSize: 12,
            fontWeight: 'bold',
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={styles.title}>Account Statement For TY</Text>
                    <Text style={styles.subTitle}>From 01/04/2024 To 31/03/2025</Text>
                </View>

                {/* Table Section */}
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableHeader, { width: '20%' }]}>Date</Text>
                        <Text style={[styles.tableHeader, { width: '40%' }]}>Particular</Text>
                        <Text style={[styles.tableHeader, { width: '15%' }]}>Credit</Text>
                        <Text style={[styles.tableHeader, { width: '15%' }]}>Debit</Text>
                        <Text style={[styles.tableHeader, { width: '10%' }]}>Closing</Text>
                    </View>

                    {/* Table Rows */}
                    {data.entries.map((entry, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={[styles.tableCell, { width: '20%' }]}>{entry.date}</Text>
                            <Text style={[styles.tableCell, { width: '40%' }]}>{entry.particular}</Text>
                            <Text style={[styles.tableCell, { width: '15%' }]}>{entry.credit}</Text>
                            <Text style={[styles.tableCell, { width: '15%' }]}>{entry.debit}</Text>
                            <Text style={[styles.tableCell, { width: '10%' }]}>{entry.closing}</Text>
                        </View>
                    ))}

                    {/* Table Footer */}
                    <View style={styles.tableFooter}>
                        <Text style={{ width: '60%' }}>Total:</Text>
                        <Text style={{ width: '15%' }}>{data.totalCredit}</Text>
                        <Text style={{ width: '15%' }}>{data.totalDebit}</Text>
                        <Text style={{ width: '10%' }}></Text>
                    </View>
                </View>

                {/* Closing Balance */}
                <Text style={styles.closingBalance}>
                    Closing Balance: {data.closingBalance} Cr
                </Text>
            </Page>
        </Document>
    );
};

export default AccountStatementPdf;
