import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
  },
  containerInputAddParticipant: {
    marginVertical: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  message: {
    flex: 1,
    justifyContent: "center",
    fontSize: 16,
    color: "#fff",

    marginTop: 10,
  },
});
