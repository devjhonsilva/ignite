import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./style";
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    title: string;
}

export function GroupCard({title, ...rest}: Props){
    return (
        <Container {...rest}>
            <Icon as={Entypo} name="users" />
            <Title>
                {title}
            </Title>
        </Container>
    )
}
