import React from "react";
import { AveRenderer, Window, Grid } from "ave-react";
import { Vec4 } from "ave-ui";

export function App() {
  return (
    <Window title="Ave React Template">
      <Grid style={{ backgroundColor: new Vec4(100, 149, 237, 255) }}></Grid>
    </Window>
  );
}

AveRenderer.render(<App />);
