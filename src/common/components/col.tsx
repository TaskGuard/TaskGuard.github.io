import { Grid, GridColProps } from "@mantine/core";

export function Col(props: GridColProps): React.ReactElement {
  return <Grid.Col {...props} />;
}
