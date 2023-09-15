import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, Alert } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { Lightstyles } from './styles/Lightstyles';
import { Switch } from 'react-native-paper';
import { Darkstyles } from './styles/Darkstyles';

export default function AlcoholCalculator() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const currentStyles = isEnabled ? Darkstyles : Lightstyles;

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [bacResult, setBACResult] = useState('');
  const [showImage, setShowImage] = useState(false);

  const calculateBAC = () => {
    if (weight === 0) {
      Alert.alert('Warning', 'Please enter your weight.');
      return;
    }

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    let calculatedResult = 0;

    if (gender === 'male') {
      calculatedResult = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      calculatedResult = gramsLeft / (weight * 0.6);
    }

    if (calculatedResult < 0) {
      calculatedResult = 0;
    }

    setBACResult(`Your alcohol lvl is: ${calculatedResult.toFixed(2)}`);
    setShowImage(calculatedResult > 0.5);
  };

  const getResultStyles = (bacValue) => {
    if (bacValue < 0.5) {
      return { color: '#0ce43b', fontSize: 20, textShadowColor: 'black' };
    } else if (bacValue >= 0.5 && bacValue <= 0.7) {
      return { color: '#e7dd11', fontSize: 25, textShadowColor: 'black' };
    } else {
      return { color: '#dd214d', fontSize: 30, textShadowColor: 'black' };
    }
  };

  return (
    <ScrollView contentContainerStyle={currentStyles.container}>
      {isEnabled ? (
        <Image
          source={require('./assets/beer.jpg')}
          style={currentStyles.backgroundImage}
        />
      ) : (
        <Image
          source={require('./assets/lightbeer.jpg')}
          style={currentStyles.backgroundImage}
        />
      )}
      <View style={currentStyles.overlay} />

      <Text style={currentStyles.switchtxt}>Lightmode on/off</Text>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        thumbColor={isEnabled ? currentStyles.thumbEnabledColor : currentStyles.thumbDisabledColor}
        trackColor={{ false: '#ecbf0a', true: '#ecbf0a' }}
      />

      <Text style={currentStyles.title}>Alcohol‰ Calculator</Text>
      <Text style={currentStyles.genderLabel}>Select gender to start:</Text>
      <View style={currentStyles.genderContainer}>

        <TouchableOpacity
          style={gender === 'male' ? currentStyles.radioSelected : currentStyles.radio}
          onPress={() => setGender('male')}
        >
          <Text style={gender === 'male' ? currentStyles.radioTextSelected : currentStyles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={gender === 'female' ? currentStyles.radioSelected : currentStyles.radio}
          onPress={() => setGender('female')}
        >
          <Text style={gender === 'female' ? currentStyles.radioTextSelected : currentStyles.radioText}>Female</Text>
        </TouchableOpacity>

      </View>

      <Text style={currentStyles.atributesLabel}>Select atributes to calculate:</Text>
      <View style={currentStyles.rowContainer}>
        <View style={currentStyles.inputContainer}>
          <Text style={currentStyles.inputLabel}>Weight (kg)</Text>
          <NumericInput
            value={weight}
            onChange={value => setWeight(value)}
            totalWidth={100}
            totalHeight={50}
            minValue={0}
            step={1}
            valueType="integer"
            borderColor="#F7D20E"
            rounded
            textColor="#F7D20E"
            iconStyle={{ color: 'black' }}
            rightButtonBackgroundColor="#37ea6d"
            leftButtonBackgroundColor="#EA3788"
            placeholder="Weight (kg)"
            containerStyle={{ backgroundColor: 'black' }}
          />
        </View>
        <View style={currentStyles.inputContainer}>
          <Text style={currentStyles.inputLabel}>Bottles (0.33)</Text>
          <NumericInput
            value={bottles}
            onChange={value => setBottles(value)}
            totalWidth={100}
            totalHeight={50}
            minValue={0}
            step={1}
            valueType="integer"
            borderColor="#F7D20E"
            rounded
            textColor="#F7D20E"
            iconStyle={{ color: 'black' }}
            rightButtonBackgroundColor="#37ea6d"
            leftButtonBackgroundColor="#EA3788"
            placeholder="Bottles"
            containerStyle={{ backgroundColor: 'black' }}
          />
        </View>
        <View style={currentStyles.inputContainer}>
          <Text style={currentStyles.inputLabel}>Time (hours)</Text>
          <NumericInput
            value={time}
            onChange={value => setTime(value)}
            totalWidth={100}
            totalHeight={50}
            minValue={0}
            step={1}
            valueType="integer"
            borderColor="#F7D20E"
            rounded
            textColor="#F7D20E"
            iconStyle={{ color: 'black' }}
            rightButtonBackgroundColor="#37ea6d"
            leftButtonBackgroundColor="#EA3788"
            placeholder="Hours"
            containerStyle={{ backgroundColor: 'black' }}

          />
        </View>
      </View>

      <TouchableOpacity onPress={calculateBAC} style={currentStyles.calculateButton}>
        <Text style={currentStyles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>


      <Text style={[currentStyles.result, getResultStyles(parseFloat(bacResult.replace('Your alcohol lvl is: ', '')))]}>
        {bacResult}
      </Text>

      {showImage && (
        <Image
          source={require('./assets/stop.png')}
          style={currentStyles.resultImage}

        />

      )}
      <View style={currentStyles.stickyTextContainer}>
        <Text style={currentStyles.copyright}>Copyright©2023 Sauli Holappa</Text>
      </View>
    </ScrollView>
  );

}
