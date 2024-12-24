import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import img from '../../../../../assets/images/logo/gotax.png'
const VoucherFlightPdf = ({ pdfData }) => {
    console.log(pdfData);
    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#FFFFFF',
            padding: 20,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
            borderBottom: '1px solid black',
            paddingBottom: 5,
        },
        logo: {
            width: 100,
            height: 30,
        },
        companyInfo: {
            textAlign: 'right',
            fontSize: 10,
        },
        title: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 14,
            marginVertical: 10,
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
            border: '1px solid black',
        },
        tableHeader: {
            flexDirection: 'row',
            backgroundColor: '#f0f0f0',
            borderBottom: '1px solid black',
            padding: 5,
        },
        tableColumn: {
            flex: 1,
            fontSize: 10,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        tableRow: {
            flexDirection: 'row',
            borderBottom: '1px solid black',
            padding: 5,
        },
        tableCell: {
            flex: 1,
            fontSize: 10,
            textAlign: 'center',
        },
        footer: {
            marginTop: 20,
            fontSize: 10,
            textAlign: 'center',
        },
    });
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Image src={`${img}`} style={styles.logo} />
                    <View style={styles.companyInfo}>
                        <Text>{pdfData?.lead_id?.first_name} {pdfData?.lead_id?.last_name}</Text>
                        <Text>Tel:</Text>
                        <Text>Email: {pdfData?.lead_id?.email_id}</Text>
                    </View>
                </View>

                {/* Title */}
                <Text style={styles.title}>Flight Voucher</Text>

                {/* Passenger Details */}
                <View style={{ fontSize: 10 }}>
                    <View style={styles.row}>
                        <Text style={styles.label} >No. of Passenger:</Text>
                        <Text>{pdfData?.no_of_passenger}</Text>
                        <Text style={styles.label}>Booking Date:</Text>
                        <Text>{pdfData?.booking_date}</Text>
                    </View>
                    <View style={styles.row}>

                        <Text style={styles.label}>Status:</Text>
                        <Text>{pdfData?.status}</Text>
                    </View>

                    {/* Passenger Table */}
                    <View style={styles.table}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableColumn}>Sr. No.</Text>
                            <Text style={styles.tableColumn}>Name</Text>
                            <Text style={styles.tableColumn}>Ticket/PNR Number</Text>
                            <Text style={styles.tableColumn}>Frequent Flyer</Text>
                        </View>
                        {pdfData?.subVouchers?.map((passenger, index) => (
                            <View style={styles.tableRow} key={index}>
                                <Text style={styles.tableCell}>{index + 1}</Text>
                                <Text style={styles.tableCell}>{passenger.name}</Text>
                                <Text style={styles.tableCell}>{passenger.pnrNumber}</Text>
                                <Text style={styles.tableCell}>{passenger.frequentFlyer || 'N/A'}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Flight Details */}
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>Flight {pdfData?.flightRoute || ''}</Text>
                    <View style={styles.table}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableColumn}>Airline</Text>
                            <Text style={styles.tableColumn}>Flight-No</Text>
                            <Text style={styles.tableColumn}>Departure</Text>
                            <Text style={styles.tableColumn}>Arrival</Text>
                            <Text style={styles.tableColumn}>PNR</Text>
                        </View>
                        {pdfData?.subVouchers?.map((passenger, index) => (
                            <View style={styles.tableRow} key={index}>
                                <Image src="path/to/airline-logo.png" style={{ flex: 1, height: 20 }} />
                                <Text style={styles.tableCell}>{passenger?.flightNumber}</Text>
                                <Text style={styles.tableCell}>{passenger?.departure?.city}</Text>
                                <Text style={styles.tableCell}>{passenger?.arrival?.city}</Text>
                                <Text style={styles.tableCell}>{passenger?.pnrNumber}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Footer */}
                <Text style={styles.footer}>Thank you for booking with {pdfData?.lead_id?.first_name} {pdfData?.lead_id?.last_name}! Your booking is confirmed.</Text>
                <Text style={styles.footer}>Please carry a valid identity proof along with this e-ticket. We recommend you check-in 3 hours prior to departure.</Text>
            </Page>
        </Document>
    )
}

export default VoucherFlightPdf