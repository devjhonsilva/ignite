import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';

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

export const Container = styled(TouchableOpacity).attrs(({theme}) => ({}))`
    width: 100%;
    height: 90px;

    background-color: ${({theme}) => theme.COLORS.GRAY_500};

    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
`;

export const Title = styled.Text<{theme: Theme}>`
    font-size: ${({theme}) => theme.FONT_SIZE.MD};
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(Entypo).attrs(({theme}) => ({
    name:"users",
    size: 32,
    color: theme.COLORS.GREEN_700
}))`
    margin-right: 20px;
`;
