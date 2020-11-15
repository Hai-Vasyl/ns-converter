import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#333",
    color: "#fff",
  },
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  pickerContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  picker: {
    flex: 1,
  },
  inputWrapper: {
    marginTop: 20,
  },
  input: {
    padding: 6,
    fontSize: 24,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  result: {
    fontSize: 20,
    color: "grey",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 25,
  },
  btnConvert: {
    marginRight: 5,
    flex: 1,
  },
  btnClear: {
    flex: 1,
  },
})
