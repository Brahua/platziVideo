import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 60,
        resizeMode: 'contain'
    }
})

function Header(props) {
    return (
        <View>
            <SafeAreaView>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />
            </SafeAreaView>
        </View>
    )
}

export default Header;