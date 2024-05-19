import { Container, Logo, BackIcon, BackButton } from "./style";
import { FontAwesome } from '@expo/vector-icons';
import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>

            {
                showBackButton &&
                <BackButton>
                    <BackIcon as={FontAwesome} name="caret-left" />
                </BackButton>
            }

            <Logo source={logoImg} />
        </Container>
    )
}
