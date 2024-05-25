import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { Entypo } from '@expo/vector-icons';
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
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
                />

                <Button
                    title="Criar turma"
                    style={{ marginTop: 20 }}
                />

            </Content>
        </Container>
    )
}
