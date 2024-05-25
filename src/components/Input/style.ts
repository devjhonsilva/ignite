import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

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

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `};
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  padding: 16px;
`;
