import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0a36",
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a275c",
    borderBottomWidth: 1,
    borderColor: "#4bebe5",
    paddingVertical: 20,
  },
  titleIcon: {
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#4bebe5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    textShadowColor: "rgba(255, 4, 55, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
  },
  wrapper: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  pickerContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#4bebe5",
    paddingHorizontal: 5,
    backgroundColor: "#2a275c",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 20,
    borderRadius: 10,
  },
  picker: {
    flex: 1,
    color: "white",
  },
  inputWrapper: {
    marginTop: 20,
    paddingVertical: 30,
    borderTopWidth: 1,
    borderColor: "#4bebe5",
  },
  input: {
    padding: 7,
    paddingHorizontal: 10,
    fontSize: 24,
    borderBottomWidth: 1,
    borderColor: "#4bebe5",
    backgroundColor: "#2a275c",
    color: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 15,
  },
  result: {
    fontSize: 20,
    color: "#4bebe5",
    marginTop: 15,
  },
  resultText: {
    flex: 1,
    padding: 7,
    paddingHorizontal: 10,
    backgroundColor: "#2a275c",
    marginLeft: 10,
    color: "white",
    borderLeftWidth: 1,
    borderColor: "#4bebe5",
  },
  resultWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "#4bebe5",
    paddingVertical: 15,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    flex: 1,
    borderWidth: 1,
    borderColor: "#4bebe5",
  },
  btnText: {
    color: "white",
    fontSize: 15,
    marginLeft: 7,
    textShadowColor: "rgba(255, 4, 55, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  btnPrimary: {
    backgroundColor: "rgba(69, 94, 216, 0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    borderBottomLeftRadius: 10,
  },
  btnSimple: {
    marginLeft: 15,
    borderBottomRightRadius: 10,
  },
  signWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
    marginRight: "auto",
  },
  signLabel: {
    color: "lightgrey",
    marginRight: 7,
    fontSize: 14,
  },
  sign: {
    color: "#4bebe5",
    fontWeight: "bold",
    fontSize: 16,
  },
})
