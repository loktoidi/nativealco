import { StyleSheet } from 'react-native';
import Constants from "expo-constants";


export const Lightstyles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 5,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 2,
    padding: 2,
    thumbEnabledColor: "#F7D20E",
    thumbDisabledColor: "#f6f5ef",
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  switchtxt: {
    color: '#f7f3f3',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: "#F7D20E",
    borderRadius: 25,
  },
  title: {
    color: '#f9f9f9',
    textDecorationLine: 'underline',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 60,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  radio: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 40,
  },
  radioSelected: {
    borderRadius: 500,
    borderWidth: 2,
    borderColor: "#f7f3f3",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 40,
    backgroundColor: 'white',
  },
  radioText: {
    color: '#f8f4f4',
    fontSize: 22,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  radioTextSelected: {
    color: '#0a0a0a',
    fontSize: 22,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    alignItems: 'center',
  },
  inputLabel: {
    color: '#f5f2f2',
    fontSize: 14,
    marginBottom: 5,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  genderLabel: {
    color: '#f4f2f2',
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  atributesLabel: {
    color: '#faf8f8',
    marginRight: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  calculateButton: {
    backgroundColor: '#080808',
    padding: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 500,
    borderWidth: 2,
    borderColor: "#f8f3f3",
    borderRadius: 25,
  },
  calculateButtonText: {
    color: '#f8f3f3',
    fontSize: 22,
    fontWeight: 'bold',
  },
  resultImage: {
    width: 80,
    height: 80,
    marginTop: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  stickyTextContainer: {
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  copyright: {
    fontSize: 12,
    color: '#0c0c0c',
  },

});