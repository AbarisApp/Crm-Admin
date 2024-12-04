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
      justifyContent: "space-around",
      margin: "20px 0"
    },
    card: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '1rem',
      width: '250px',
      textAlign: 'center',
    },
    header: {
      fontSize: '1rem',
      fontWeight: '500',
      margin: '0 0 10px 0',
    },
    subHeader: {
      fontSize: '0.875rem',
      color: '#666',
      marginBottom: '0.5rem',
    },
    countBadge: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      margin: '0.5rem 0',
    },
    progressCircle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      backgroundColor: '#e0e0e0',
      margin: '0.5rem auto',
    },
  };

  return (
    <div style={styles.container}>
      {/* Items Card */}
      <div style={styles.card}>
        <h6 style={styles.header}>Items</h6>
        <div style={styles.subHeader}>0 Orders</div>
        <div style={styles.countBadge}>0 Items</div>
      </div>

      {/* Overall Progress Card */}
      <div style={styles.card}>
        <h6 style={styles.header}>Overall Progress</h6>
        <div style={styles.subHeader}>Total Items</div>
        <div style={styles.countBadge}>0</div>
        <div style={styles.progressCircle}>0%</div>
      </div>

      {/* Today's Progress Card */}
      <div style={styles.card}>
        <h6 style={styles.header}>Today's Progress</h6>
        <div style={styles.subHeader}>Items updated today</div>
        <div style={styles.countBadge}>0</div>
        <div style={styles.progressCircle}>0%</div>
      </div>
    </div>
  );
}

export default TopHead;
