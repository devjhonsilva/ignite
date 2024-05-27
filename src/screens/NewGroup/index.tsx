import { useState } from "react";
import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { Entypo } from '@expo/vector-icons';
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";


export function NewGroup() {
    const navigation = useNavigation();

    const [group, setGroup] = useState<string>('');

    const handleNew = () => {
        navigation.navigate('players', { group })
    }
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon as={Entypo} name="users" />

                <Highlight
                    title="Nova turma"
                    subtitle="crie a turma para adicionar pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}

                />

                <Button
                    title="Criar turma"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />

            </Content>
        </Container>
    )
}
