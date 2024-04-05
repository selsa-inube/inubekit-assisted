type IAssistedStep = {
  id: number;
  label: string;
  description?: string;
};

interface IAssistedProgressBarProps {
  currentStep: IAssistedStep["id"];
  arrayLength: number;
}

type IAssistedTitleButton = {
  before?: string;
  after?: string;
  finish?: string;
};
const sizes = ["small", "large"] as const;
type IAssistedSize = (typeof sizes)[number];

const parameters = {
  docs: {
    descriptions: {
      component:
        "The assited displays the steps and progress through a journey.",
    },
  },
};

const props = {
  steps: {
    description:
      "(Array of objects): An array to represent each step of the journey. Each object in the array represents one step and must have the following structure: id, label, description (Optional). The order of the steps depends on the order in the array,",
  },
  currentStepId: {
    description:
      "(string | number): An identifier that matches one of the id values within the steps array to indicate the current step.",
  },

  handlePrev: {
    description:
      "(Function): (Optional) A function that will be called when the user clicks on the previous button. If not provided, the button will not be rendered.",
  },

  handleNex: {
    descriptions:
      "(Function): (Optional) A function that will be called when the user clicks on the next button.",
  },
  titleButtonBefore: {
    description:
      "(string): (Optional) A string to be displayed in the button before the label of the current step.",
  },
  titleButtonAfter: {
    description:
      "(string): (Optional) A string to be displayed in the button after the label of the current step.",
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "assited's size",
    table: {
      defaultValue: { summary: "wide" },
    },
  },
};

export { parameters, props };
export type {
  IAssistedStep,
  IAssistedProgressBarProps,
  IAssistedTitleButton,
  IAssistedSize,
};
