import Head from "next/head";
import StitchesLogo from "../components/StitchesLogo";
import { styled } from "../stitches.config";
import { violet, blackA, mauve } from "@radix-ui/colors";
import { keyframes } from "@stitches/react";

const Box = styled("div", {
  backgroundColor: violet.violet8,
  height: "100vh",
  width: "100vw",
});

const Text = styled("p", {
  fontFamily: "$system",
  color: "$hiContrast",
  variants: {
    size: {
      1: {
        fontSize: "$5",
      },
      2: {
        fontSize: "$6",
      },
    },
  },
});

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  backgroundColor: "$purple600",
  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
    },
  },
  defaultVariants: {
    variant: "violet",
  },
});

const Container = styled("div", {
  marginX: "auto",
  paddingX: "$3",
  variants: {
    size: {
      1: {
        maxWidth: "300px",
      },
      2: {
        maxWidth: "585px",
      },
      3: {
        maxWidth: "865px",
      },
    },
  },
});

export default function Home() {
  return (
    <Box css={{ paddingY: "$6" }}>
      <Head>
        <title>Electricity recorder</title>
      </Head>
      <Container size={{ "@initial": "1", "@bp1": "3" }}>
        <StitchesLogo />
        <Text as="h1" size={{ "@initial": "1", "@bp1": "2" }}>
          Electricity recorder 🔋
        </Text>
        <Button>Start recording</Button>
      </Container>
    </Box>
  );
}
