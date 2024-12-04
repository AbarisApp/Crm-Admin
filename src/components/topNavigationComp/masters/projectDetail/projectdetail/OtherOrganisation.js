import React, { useState } from 'react';

const users = [
    { name: 'Abdul Quadir', role: 'Project Manager', phone: '+918851746286', initial: 'A', color: '#68c4d7' },
   
];
export const OtherOrganisation = () => {
    return (
        <div style={styles.container}>
          
            <div style={styles.userList}>
                {users.map((user, index) => (
                    <div key={index} style={styles.userCard}>
                        <div style={{ ...styles.userAvatar, backgroundColor: user.color }}>{user.initial}</div>
                        <div style={styles.userInfo}>
                            <div style={styles.userName}>{user.name}</div>
                            {/* <div style={styles.userRole}>{user.role} | {user.phone}</div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#fff'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
    },
    title: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#333',
        margin: 0,
    },
    addUserLink: {
        color: '#e53935',
        fontWeight: '500',
        textDecoration: 'none',
        fontSize: '14px',
    },
    userList: {
        display: 'flex',
        flexDirection: 'column',
    },
    userCard: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #e0e0e0',
    },
    userAvatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '16px',
        marginRight: '12px',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    userName: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#333',
    },
    userRole: {
        fontSize: '14px',
        color: '#777',
    },
};
