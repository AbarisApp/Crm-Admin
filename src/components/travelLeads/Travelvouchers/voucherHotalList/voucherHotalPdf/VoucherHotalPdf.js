
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import img from '../../../../../assets/images/logo/gotax.png'

const VoucherHotalPdf = ({ pdfData }) => {
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
        logo: {
            width: 100,
            height: 30,
        },
        companyInfo: {
            textAlign: 'right',
            fontSize: 10,
        },
        voucherTitle: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 14,
            marginVertical: 10,
        },
        boldText: {
            fontWeight: 'bold',
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
        },
        label: {
            fontWeight: 'bold',
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
    });
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Image src={`${img}`} style={styles.logo} />
                        <View style={styles.companyInfo}>
                            <Text>{pdfData?.lead_id?.first_name} {pdfData?.lead_id?.last_name}</Text>
                            <Text>Tel: 8851746286</Text>
                            <Text>Email: {pdfData?.lead_id?.email_id}</Text>
                        </View>
                    </View>

                    {/* Voucher Title */}
                    <Text style={styles.voucherTitle}>Voucher</Text>

                    {/* Hotel Information */}
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Hotel:</Text>
                            <Text>{pdfData?.hotel?.hotel_name}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Address:</Text>
                            <Text>{pdfData?.lead_id?.address}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>City:</Text>
                            <Text>{pdfData?.city?.name}</Text>
                        </View>
                        {/* <View style={styles.row}>
                            <Text style={styles.label}>Contact:</Text>
                            <Text>{pdfData?.}</Text>
                        </View> */}
                    </View>

                    {/* Guest Information */}
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Guest Name:</Text>
                            <Text>{pdfData?.traveller_name}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Voucher Number:</Text>
                            <Text>{pdfData?.voucher_number}</Text>
                        </View>
                    </View>

                    {/* Stay Details */}
                    <View>
                        <View style={styles.row}>
                            <Text>👤 Adults: </Text>
                            <Text>{pdfData?.adult}</Text>
                            <Text>👶 Infants:</Text>
                            <Text>{pdfData?.infant}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text>🏠 Number of Rooms:</Text>
                            <Text>{pdfData?.no_of_rooms}</Text>
                            {/* <Text>🌙 Nights:</Text>
                            <Text>{pdfData?.no_of_rooms}</Text> */}
                        </View>
                        <View style={styles.row}>
                            <Text>📅 Check-In: / Time</Text>
                            <Text>{pdfData?.checkin_date} {pdfData?.checkin_time}</Text>
                            <Text>📅 Check-Out: / Time</Text>
                            <Text>{pdfData?.checkout_date} {pdfData?.checkout_time}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text>🛏️ Booking Date:</Text>
                            <Text>{pdfData?.booking_date}</Text>
                            <Text>🛏️ Child With Bed:</Text>
                            <Text>{pdfData?.child_with_bed}</Text>
                        </View>
                    </View>

                    {/* Footer */}
                    <Text style={styles.footer}>Thank you for booking with {pdfData?.lead_id?.first_name} {pdfData?.lead_id?.last_name}...!!</Text>
                </View>
            </Page>
        </Document>
    )
}

export default VoucherHotalPdf