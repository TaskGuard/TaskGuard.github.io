import { Grid, ColProps } from "@mantine/core";

export function Col(props: ColProps): React.ReactElement {
  return <Grid.Col {...props} />;
}
