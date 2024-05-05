import { useEffect } from "react";

export default function Home(): JSX.Element {
  useEffect(() => {
    window.location.href = "/docs/welcome";
  });
  return <></>;
}
