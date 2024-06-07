import { useState, useEffect, useRef } from "react";
import { Alert, FlatList, TextInput, Keyboard } from "react-native";
import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./style";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroup } from "@storage/player/playerGetByGroups";
import { playerGetByGroupAndTeam } from "@storage/player/PlayerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/playerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "@components/Loading";

type RouteParams = {
    group: string;
}

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const [newPlayer, setNewPlayer] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const navigation = useNavigation();

    const newPlayerNameInputRef = useRef<TextInput>(null);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    const handleAddPlayer = async () => {
        if (newPlayer.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe nome da pessoa para continuar.')
        }

        const newPlayerName = {
            name: newPlayer,
            team,
        }
        try {
            await playerAddByGroup(newPlayerName, group);

            const players = await playerGetByGroup(group);

            newPlayerNameInputRef.current?.blur();

            fetchPlayersByTeam();
            setNewPlayer('');

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message);
            } else {
                console.log(error);
            }
        }

    }

    async function fetchPlayersByTeam() {
        try {
            setIsLoading(true);

            const playersByTeam = await playerGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    async function handleRemovePlayer(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group);
            fetchPlayersByTeam();

        } catch (error) {
            throw error;
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group);
            navigation.navigate('group')
        } catch (error) {
            throw error;
        }
    }

    async function handleRemoveGroup() {
        Alert.alert(
            'Remover',
            'Deseja remover o grupo?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => groupRemove() }
            ]
        )
    }

    useEffect(() => {
        fetchPlayersByTeam();
    }, [team])

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title={group}
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    onChangeText={setNewPlayer}
                    autoCorrect={false}
                    value={newPlayer}
                    inputRef={newPlayerNameInputRef}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />
                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayer}
                />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>


            {
                isLoading ? <Loading /> :
                    <FlatList
                        data={players}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <PlayerCard
                                name={item.name}
                                onRemove={() => handleRemovePlayer(item.name)}
                            />
                        )}
                        ListEmptyComponent={() => (
                            <ListEmpty
                                message="Não há pessoas nesse time"
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[
                            { paddingBottom: 100 },
                            players.length === 0 && { flex: 1 }
                        ]}
                    />
            }



            <Button
                title="Remover turma"
                type='SECONDARY'
                onPress={handleRemoveGroup}
            />
        </Container>
    )
}
