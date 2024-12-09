import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    paddingLeft: 24,
  },
  participantName: {
    fontSize: 16,
    color: "#fff",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
  },
});
