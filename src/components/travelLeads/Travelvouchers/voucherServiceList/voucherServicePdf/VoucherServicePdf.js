
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import img from '../../../../../assets/images/logo/gotax.png'
const VoucherServicePdf = ({ pdfData }) => {
    // console.log(pdfData);

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
                        <Text>Tel: {pdfData?.lead_id?.mobile_number}</Text>
                        <Text>Email: {pdfData?.lead_id?.email_id}</Text>
                    </View>
                </View>

                {/* Title */}
                <Text style={styles.title}>Service Voucher</Text>

                {/* Guest Information */}
                <View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Guest Name:</Text>
                        <Text>{pdfData?.traveller_name}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Adults:</Text>
                        <Text>{pdfData?.adults}</Text>
                        <Text style={styles.label}>Child:</Text>
                        <Text>{pdfData?.child}</Text>
                        <Text style={styles.label}>Infant:</Text>
                        <Text>{pdfData?.infant}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Voucher Number:</Text>
                        <Text>{pdfData?.voucher_number}</Text>
                        <Text style={styles.label}>Travel Date:</Text>
                        <Text>{pdfData?.travel_date}</Text>
                    </View>
                </View>

                {/* Footer */}
                <Text style={styles.footer}>Thank you for booking with {pdfData?.lead_id?.first_name} {pdfData?.lead_id?.last_name} !!</Text>
            </Page>
        </Document>
    )
}

export default VoucherServicePdf