import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
function StockTransferPdf() {
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
            width: '14%',
            borderRight: '1px solid black',
            padding: 5,
        },
        tableHeader: {
            width: '14%',
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
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>

                    {/* Header */}
                    <View style={styles.header}>
                        <Text>HEAD OFFICE</Text>
                        <Text style={styles.title}>Stock Transfer</Text>
                        <Text>Original</Text>
                    </View>

                    {/* Transfer Details */}
                    <View style={styles.row}>
                        <Text>Transfer No: <Text style={styles.boldText}>2</Text></Text>
                        <Text>Date: <Text style={styles.boldText}>05/11/2024</Text></Text>
                        <Text>Total Qty: <Text style={styles.boldText}>0.000</Text></Text>
                    </View>

                    {/* Address Details */}
                    <Text>From Address: <Text style={styles.boldText}>1000</Text></Text>
                    <Text>To Address: <Text style={styles.boldText}>2000</Text></Text>
                    <Text>Transport Name: <Text style={styles.boldText}>TRANSPORT NAME</Text></Text>
                    <Text>Delivery At:</Text>

                    {/* Table Header */}
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeader}>No.</Text>
                            <Text style={styles.tableHeader}>Particular</Text>
                            <Text style={styles.tableHeader}>Qty</Text>
                            <Text style={styles.tableHeader}>Unit</Text>
                            <Text style={styles.tableHeader}>Batch No</Text>
                            <Text style={styles.tableHeader}>Exp Date</Text>
                            <Text style={styles.tableHeader}>Location</Text>
                            <Text style={styles.tableHeader}>To Location</Text>
                        </View>

                        {/* Table Rows */}
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>1</Text>
                            <Text style={styles.tableCol}>AGRI PRODUCT 100 ML</Text>
                            <Text style={styles.tableCol}>0.000</Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.tableCol}>Start</Text>
                            <Text style={styles.tableCol}>28/11/2024</Text>
                            <Text style={styles.tableCol}>LOCATION 2</Text>
                            <Text style={styles.tableCol}>LOCATION 3</Text>
                        </View>
                    </View>

                    {/* Notes Section */}
                    <View style={styles.noteSection}>
                        <Text>Notes:</Text>
                    </View>

                    {/* Footer */}
                    <Text style={styles.footer}>HEAD OFFICE</Text>
                    <Text style={styles.footer}>( Authorized Signatory )</Text>
                </View>
            </Page>
        </Document>
    );
}

export default StockTransferPdf