import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuModal = ({ visible, onClose, onBookmark, onDislike }) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1}>
                <View style={styles.menuContainer}>
                    <TouchableOpacity onPress={onBookmark} style={styles.menuOption}>
                        <Text style={styles.menuText}>Bookmark</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDislike} style={styles.menuOption}>
                        <Text style={styles.menuText}>Dislike</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        width: 150,
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
    },
    menuOption: {
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    menuText: {
        color: 'white',
        fontSize: 16,
    },
});

export default MenuModal;
