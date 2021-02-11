/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Database from './Database';
const db = new Database();

const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [id, setId] = React.useState(0);

  const save = () => {
    let data = {
      prodId: id,
      prodName: value,
      prodDesc: 'testing testing',
      prodImage: 'image',
      prodPrice: '10000',
    };
    db.addProduct(data)
      .then((result) => {
        console.log(result);
        setId(result.insertId + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View>
              <Text>Nama</Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => onChangeText(text)}
                value={value}
              />
              <TouchableOpacity
                style={{
                  width: '60%',
                  height: 60,
                  backgroundColor: 'blue',
                  margin: 16,
                }}
                onPress={() => {
                  save();
                }}>
                <Text>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
