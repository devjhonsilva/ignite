import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('newGroup')
  }

  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma!"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (<GroupCard title={item} />)}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (<ListEmpty
          message="Cadastre a primeira turma!" />)}
      />

      <Button
        title="Criar nova turma"
        type="PRIMARY"
        onPress={handleNewGroup}
      />

    </Container>
  );
}
