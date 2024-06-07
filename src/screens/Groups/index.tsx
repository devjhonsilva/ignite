import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupGetAll } from '@storage/group/groupGetAll';
import { Loading } from '@components/Loading';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const handleNewGroup = () => {
    navigation.navigate('newGroup')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupGetAll();
      setGroups(data);

    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenGroups = (group: string) => {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma!"
      />


      {
        isLoading ? <Loading /> :
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroups(item)}
              />)}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (<ListEmpty
              message="Cadastre a primeira turma!" />)}
          />
      }


      <Button
        title="Criar nova turma"
        type="PRIMARY"
        onPress={handleNewGroup}
      />

    </Container>
  );
}
