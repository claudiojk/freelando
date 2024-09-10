import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "",
    atencao: "",
    focus: "",
    primarias: {
      a: "#5754ED",
      b: "",
      c: "",
    },
    segundarias: {
      a: "EBEAF9",
      b: "",
      c: "",
    },
    neutras: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
  espacamentos: {
    s: '16px',
    l: '32px',
  }
};

export const ProvedorTema = ({ Children }) => {
  return <ThemeProvider theme={tema}>{Children}</ThemeProvider>;
};
