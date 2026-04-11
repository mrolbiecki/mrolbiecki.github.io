import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async () => {
  const letter = SITE.title.trim().charAt(0).toUpperCase() || "M";
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        children: {
          type: "span",
          props: {
            style: {
              fontSize: 300,
              fontWeight: 600,
              color: "#000000",
            },
            children: letter,
          },
        },
      },
    },
    {
      width: 512,
      height: 512,
      embedFont: true,
      fonts: await loadGoogleFonts(letter),
    }
  );
};
