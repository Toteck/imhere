import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participação existe",
        "Já existe um participante na lista com esse nome"
      );
    }
    setParticipants((prevState) => [...participants, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants(
            participants.filter((participant) => participant !== name)
          );
          Alert.alert(`Participante ${name} deletado!`);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta 4 de Novembro de 2024</Text>

      <View style={styles.containerInputAddParticipant}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {participants.length > 0 ? (
        <FlatList
          data={participants}
          renderItem={({ item }) => (
            <Participant
              name={item}
              handleRemoveParticipant={handleParticipantRemove}
            />
          )}
          keyExtractor={(item) => item}
        />
      ) : (
        <Text style={styles.message}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de
          presença!
        </Text>
      )}
    </View>
  );
}
