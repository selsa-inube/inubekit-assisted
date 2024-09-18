import { parameters, props } from "../props";
import { AssistedController, IAssistedController } from "./Assisted.Controller";
import { Assisted } from "..";

const story = {
  title: "Feedback/Assisted",
  component: Assisted,
  parameters,
  argTypes: props,
};

const stepsMock = [
  {
    number: 1,
    label: "Información general",
    description: "Información general",
  },

  {
    number: 2,
    label: "Ramas",
    description: "Ramas",
  },

  {
    number: 3,
    label: "Proyectos",
    description: "Proyectos",
  },

  {
    number: 4,
    label: "Unidades de ayuda",
    description: "Unidades de ayuda",
  },

  {
    number: 5,
    label: "Nómina",
    description: "Nómina",
  },

  {
    number: 6,
    label: "Verificación",
    description: "Verificación",
  },
];

const Default = (args: IAssistedController) => <AssistedController {...args} />;

Default.args = {
  steps: stepsMock,
  size: "large",
  disableBack: false,
  disableNext: false,
  disableSubmit: false,
  controls: {
    goBackText: "Anterior",
    goNextText: "Siguiente",
    submitText: "Enviar",
  },
};

export { Default };
export default story;
