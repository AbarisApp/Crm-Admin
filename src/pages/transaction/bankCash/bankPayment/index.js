import BankPayment from "../../../../components/transaction/bankCash/bankPayment/BankPayment"


const BankPaymentPage = ({ heading, apiPass }) => {
    return (
        <>
            <BankPayment heading={heading} apiPass={apiPass} />
        </>
    )
}

export default BankPaymentPage