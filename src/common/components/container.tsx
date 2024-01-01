import { Container as MantineContainer, ContainerProps as MantineContainerProps } from "@mantine/core";

type ContainerProps = MantineContainerProps;

export function Container(props: ContainerProps): JSX.Element {
  return <MantineContainer {...props} />;
}
