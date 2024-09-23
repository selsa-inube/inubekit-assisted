import { parameters, props } from "../props";
import { AssistedController, IAssistedController } from "./Assisted.Controller";

const story = {
  title: "Feedback/Assisted",
  component: AssistedController,
  parameters,
  argTypes: props,
};

const stepsMock = {
  general: {
    id: "general",
    number: 1,
    name: "Información general",
    description: "Información general",
  },
  branches: {
    id: "branches",
    number: 2,
    name: "Ramas",
    description: "Ramas",
  },
  projects: {
    id: "projects",
    number: 3,
    name: "Proyectos",
    description: "Proyectos",
  },
  help: {
    id: "help",
    number: 4,
    name: "Unidades de ayuda",
    description: "Unidades de ayuda",
  },
  payroll: {
    id: "payroll",
    number: 5,
    name: "Nómina",
    description: "Nómina",
  },
  verification: {
    id: "verification",
    number: 6,
    name: "Verificación",
    description: "Verificación",
  },
};

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
