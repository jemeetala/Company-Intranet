import { Radio } from "components";
export default {
  title: "jemee_s_application93/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  shape: "CircleBorder10",
  variant: "OutlineIndigoA200",
  size: "md",
  inputClassName: "mr-1",
};
