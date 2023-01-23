import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Text } from "react-native";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header showBackButton />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Galera do ignite" />
    </Container>
  );
}
