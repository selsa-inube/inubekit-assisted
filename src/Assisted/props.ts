interface IAssistedStep {
  id: string | number;
  number: number;
  name: string;
  description?: string;
}

interface IAssistedControls {
  goBackText?: string;
  goNextText?: string;
  submitText?: string;
}

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
  step: {
    description:
      "(Object): The current step being displayed. The object should match one of the steps in the array passed to `steps`.",
  },
  totalSteps: {
    description: "(number): The total number of steps in the journey.",
  },
  onBackClick: {
    description:
      "(Function): A function that will be called when the user clicks the previous button.",
  },
  onNextClick: {
    description:
      "(Function): A function that will be called when the user clicks the next button.",
  },
  onSubmitClick: {
    description:
      "(Function): A function that will be called when the user clicks the submit button (on the last step).",
  },
  disableBack: {
    description:
      "(boolean): If `true`, the back button will be disabled. Default is `false`.",
  },
  disableNext: {
    description:
      "(boolean): If `true`, the next button will be disabled. Default is `false`.",
  },
  disableSubmit: {
    description:
      "(boolean): If `true`, the submit button will be disabled. Default is `false`.",
  },
  controls: {
    description:
      "(Object): An object to customize the button text. It may include `goBackText`, `goNextText`, and `submitText` to change the default button labels.",
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "The size of the Assisted component.",
    table: {
      defaultValue: { summary: "large" },
    },
  },
};

export { parameters, props };
export type { IAssistedStep, IAssistedControls, IAssistedSize };
