import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./style";
import { useState } from "react";

export function Players() {
  const [team, setTeam] = useState("Time A");

  const [players, setPlayers] = useState([]);
  return (
    <Container>
      <Header showBackButton />
      <HighLight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          keyExtractor={(item) => item}
          data={["Time A", "time B"]}
          renderItem={({ item }) => (
            <Filter
              isActive={item === team}
              onPress={() => setTeam(item)}
              title={item}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
    </Container>
  );
}
