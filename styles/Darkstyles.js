import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

export const Darkstyles = StyleSheet.create({

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
    color: '#F7D20E',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: "#F7D20E",
    borderRadius: 25,
  },
  title: {
    color: '#F7D20E',
    textDecorationLine: 'underline',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 60,
    textShadowColor: '#f7f7f5',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
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
    borderColor: "#F7D20E",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 40,
  },
  radioText: {
    color: '#c2c2bb',
    fontSize: 22,

  },
  radioTextSelected: {
    color: '#F7D20E',
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
    color: '#F7D20E',
    fontSize: 14,
    marginBottom: 5,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  genderLabel: {
    color: '#c2c2bb',
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  atributesLabel: {
    color: '#c2c2bb',
    marginRight: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  calculateButton: {
    padding: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 500,
    borderWidth: 2,
    borderColor: "#F7D20E",
    borderRadius: 25,
  },
  calculateButtonText: {
    color: '#F7D20E',
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
    marginBottom: 10,
    fontSize: 18,
  },
  stickyTextContainer: {
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  copyright: {
    fontSize: 12,
    color: '#F7D20E',
  },

});