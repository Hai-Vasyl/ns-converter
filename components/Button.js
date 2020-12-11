import React from "react"
import { Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "../styles"

const Button = ({ press, prime, simple, title, iconName }) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={[
        styles.btn,
        prime && styles.btnPrimary,
        simple && styles.btnSimple,
      ]}
    >
      <Icon name={iconName} size={30} color='red' />
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
