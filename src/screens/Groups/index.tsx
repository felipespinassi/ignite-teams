import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ListEmpty } from "@components/ListEmpty";
import { useState } from "react";
import { FlatList, Text } from "react-native";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Família", "Expedy"]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        style={{ width: "100%" }}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button
        onPress={handleNewGroup}
        title="Criar nova turma"
        type="PRIMARY"
      />
    </Container>
  );
}
