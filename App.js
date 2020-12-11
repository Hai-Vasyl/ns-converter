import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { Picker } from "@react-native-picker/picker"
import styles from "./styles"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Button from "./components/Button"

export default function App() {
  const [fromOptions, setFromOptions] = useState([
    { label: "Decimal", value: "decimal", radix: null },
    { label: "Hexadecimal", value: "hexadecimal", radix: 16 },
    { label: "Octal", value: "octal", radix: 8 },
    { label: "Binary", value: "binary", radix: 2 },
  ])
  const [toOptions, setToOptions] = useState([
    { label: "Decimal", value: "decimal", enabled: false },
    { label: "Hexadecimal", value: "hexadecimal", enabled: true },
    { label: "Octal", value: "octal", enabled: true },
    { label: "Binary", value: "binary", enabled: true },
  ])
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const [convertPick, setConvertPick] = useState({
    from: "decimal",
    to: "binary",
  })

  const handleChooseOption = (item, name) => {
    const setOption = () =>
      setConvertPick((prev) => ({ ...prev, [name]: item }))

    if (name === "to") {
      const itemObj = toOptions.find((option) => option.value === item)
      if (itemObj.enabled) {
        setOption()
      }
    } else {
      if (convertPick.to !== item) {
        setOption()

        setToOptions((prev) =>
          prev.map((option) => {
            if (option.value === item) {
              return { ...option, enabled: false }
            }
            return { ...option, enabled: true }
          })
        )
      }
    }
  }

  const convertNumber = () => {
    const { from, to } = convertPick
    const fromObj = fromOptions.find((option) => option.value === from)
    const toObj = fromOptions.find((option) => option.value === to)

    if (to === "decimal") {
      setResult(parseInt(input, fromObj.radix))
    } else {
      const num = parseInt(input, fromObj.radix)
      setResult(num.toString(toObj.radix))
    }
  }

  const clearResult = () => {
    setInput("")
    setResult("")
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Icon name='orbit' color='red' size={38} style={styles.titleIcon} />
        <Text style={styles.title}>NS-Converter</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={convertPick.from}
            onValueChange={(item) => handleChooseOption(item, "from")}
            style={styles.picker}
          >
            {fromOptions.map((option) => {
              return (
                <Picker.Item
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              )
            })}
          </Picker>
          <Picker
            selectedValue={convertPick.to}
            onValueChange={(item) => handleChooseOption(item, "to")}
            style={styles.picker}
          >
            {toOptions.map((option) => {
              return (
                <Picker.Item
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              )
            })}
          </Picker>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder='Enter number'
            value={input}
            onChangeText={setInput}
            placeholderTextColor='#4bebe5'
            style={styles.input}
          />
          <View style={styles.resultWrapper}>
            <Text style={[styles.result]}>Result:</Text>
            <Text style={[styles.result, styles.resultText]}>{result}</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            iconName='redo-variant'
            prime
            press={convertNumber}
            title='CONVERT'
          />
          <Button
            simple
            iconName='backup-restore'
            press={clearResult}
            title='CLEAR'
          />
        </View>
        <View style={styles.signWrapper}>
          <Text style={styles.signLabel}>Developed by:</Text>
          <Text style={styles.sign}>Vasyl Hai</Text>
        </View>
      </View>
    </View>
  )
}
