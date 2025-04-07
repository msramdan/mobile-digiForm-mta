import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000); // tampil selama 3 detik

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      {isSplashVisible ? (
        <View style={styles.splashContainer}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <WebView source={{ uri: 'https://digiform.mitrateraakurasi.com/auth-web' }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // ganti jika ingin warna latar lain
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});

export default App;
