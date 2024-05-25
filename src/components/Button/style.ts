import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface Theme {
  COLORS: {
    WHITE: string;

    GREEN_700: string;
    GREEN_500: string;

    RED: string;
    RED_DARK: string;

    GRAY_700: string;
    GRAY_600: string;
    GRAY_500: string;
    GRAY_400: string;
    GRAY_300: string;
    GRAY_200: string;
    GRAY_100: string;
  };
  FONT_FAMILY: {
    REGULAR: string;
    BOLD: string;
  };
  FONT_SIZE: {
    SM: string;
    MD: string;
    LG: string;
    XL: string;
  };
}

export type ButtonTypeStyledProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyledProps;
};
export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
