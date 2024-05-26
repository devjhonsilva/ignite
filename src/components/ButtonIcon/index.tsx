import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeProps, Container, Icon } from "./style";
import { MaterialIcons } from '@expo/vector-icons';


type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon name={icon} type={type as ButtonIconTypeProps} />
        </Container>
    )
}
