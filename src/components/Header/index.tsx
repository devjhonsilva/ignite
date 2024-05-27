import { Container, Logo, BackIcon, BackButton } from "./style";
import { FontAwesome } from '@expo/vector-icons';
import logoImg from '@assets/logo.png';
import { useNavigation } from "@react-navigation/native";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('group');
    }

    return (
        <Container>

            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon as={FontAwesome} name="caret-left" />
                </BackButton>
            }

            <Logo source={logoImg} />
        </Container>
    )
}
