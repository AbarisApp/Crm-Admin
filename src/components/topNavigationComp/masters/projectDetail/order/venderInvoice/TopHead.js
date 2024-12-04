import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TopHead() {
  // State to store payment data from the API
  const [paymentData, setPaymentData] = useState({
    requested: { count: 0, amount: 0 },
    approved: { count: 0, amount: 0 },
    pending: { count: 0, amount: 0 },
    done: { count: 0, amount: 0 }
  });

  // Fetch payment data from the API on component mount
  useEffect(() => {
    async function fetchPaymentData() {
      try {
        const response = await axios.get('/api/payment-status'); // Replace with your API endpoint
        setPaymentData(response.data);
      } catch (error) {
        console.error('Error fetching payment data:', error);
      }
    }

    fetchPaymentData();
  }, []);

  // CSS styles
  const styles = {
    container: {
      display: 'flex',
      gap: '1rem',
      justifyContent:"space-around",
      margin:"20px 0"
    },
    card: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '1rem',
      width: '300px',
      textAlign: 'center',
    },
    header: {
      fontSize: '1rem',
      fontWeight: '500',
      margin: '0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    countBadge: {
      backgroundColor: '#e0e0e0',
      borderRadius: '50%',
      padding: '0.25rem 0.5rem',
      fontSize: '0.875rem',
    },
    amount: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '0.5rem 0 0',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h6 style={styles.header}>
          🛒 Invoice Uploaded <span style={styles.countBadge}>{paymentData.requested.count}</span>
        </h6>
        <p style={styles.amount}>₹ {paymentData.requested.amount}</p>
      </div>
      <div style={styles.card}>
        <h6 style={styles.header}>
          📄 Invoice Approved
          <span style={styles.countBadge}>{paymentData.approved.count}</span>
        </h6>
        <p style={styles.amount}>₹ {paymentData.approved.amount}</p>
      </div>
      <div style={styles.card}>
        <h6 style={styles.header}>
          🕒 Pending Approval
          <span style={styles.countBadge}>{paymentData.pending.count}</span>
        </h6>
        <p style={styles.amount}>₹ {paymentData.pending.amount}</p>
      </div>
    
    </div>
  );
}

export default TopHead;
