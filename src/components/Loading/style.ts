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

export const Container = styled.View<{theme : Theme}>`
 flex: 1;
 justify-content: center;
 align-items: center;

 background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.GREEN_700
}))``;
