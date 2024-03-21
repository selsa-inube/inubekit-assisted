import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";

import { Button } from "@inubekit/button";
import { Grid } from "@inubekit/grid";
import { Icon } from "@inubekit/icon";
import { inube } from "@inubekit/foundations";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { useMediaQuery } from "@inubekit/hooks";

import {
  StyledProgressBar,
  StyledProgressIndicator,
  StyledStepIndicator,
} from "./styles";

type IAssistedIStep = {
  id: number;
  label: string;
  description?: string;
};

interface IAssistedIProgressBarProps {
  currentStep: IAssistedIStep["id"];
  arrayLength: number;
}

type IAssistedITitleButton = {
  before?: string;
  after?: string;
  finish?: string;
};

interface IAssisted {
  steps: IAssistedIStep[];
  currentStepId: IAssistedIStep["id"];
  handlePrev: (id: IAssistedIStep["id"]) => void;
  handleNext: (id: IAssistedIStep["id"]) => void;
  titleButtonText?: IAssistedITitleButton;
}

const ProgressBar = (props: IAssistedIProgressBarProps) => {
  const { currentStep, arrayLength } = props;
  return (
    <StyledProgressBar>
      <StyledProgressIndicator
        $currentStep={currentStep}
        $arrayLength={arrayLength}
      />
    </StyledProgressBar>
  );
};

const Assisted = (props: IAssisted) => {
  const {
    steps,
    currentStepId,
    handlePrev,
    handleNext,
    titleButtonText: { before, after, finish } = {
      before: "Prev",
      after: "Next",
      finish: "Send",
    },
  } = props;

  const interceptHandlePrev = (id: IAssistedIStep["id"]) => {
    try {
      handlePrev && handlePrev(id);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const interceptHandleNext = (id: IAssistedIStep["id"]) => {
    try {
      handleNext && handleNext(id);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const measure = useMediaQuery("(min-width: 600px)");

  const currentStep = steps.find((step) => step?.id === currentStepId);

  const currentStepIndex = steps.findIndex(
    (step) => step?.id === currentStepId
  );

  return (
    <Grid templateColumns={!measure ? "1fr" : "auto 1fr auto"}>
      {measure && (
        <Stack alignItems="center">
          <Button
            spacing="wide"
            variant="none"
            iconBefore={<MdArrowBack />}
            onClick={() => interceptHandlePrev(currentStep!.id)}
            appearance="primary"
            disabled={currentStepIndex === 0}
          >
            {before}
          </Button>
        </Stack>
      )}

      <Stack direction="column" margin="s0 s0 s075 s0">
        <Grid templateColumns="auto auto 1fr auto" gap="s100">
          {!measure && (
            <Icon
              appearance="primary"
              icon={<MdArrowBack style={{ padding: "2px 0px" }} />}
              size="20px"
              onClick={() => interceptHandlePrev(currentStep!.id)}
              disabled={currentStepIndex === 0}
            />
          )}
          <StyledStepIndicator>
            {currentStepId !== steps.length ? (
              <Text type="label" size="medium" appearance="primary">
                {currentStepId}
              </Text>
            ) : (
              <Icon
                appearance="primary"
                icon={<MdCheckCircle />}
                size="20px"
                spacing="compact"
              />
            )}
          </StyledStepIndicator>
          <Text type="title" size={measure ? "medium" : "small"} ellipsis>
            {currentStep?.label}
          </Text>
          {!measure && (
            <Icon
              appearance="primary"
              icon={<MdArrowForward style={{ padding: "0px 2px" }} />}
              size="20px"
              onClick={() => interceptHandleNext(currentStep!.id)}
            />
          )}
        </Grid>
        <Stack alignItems="center" gap={inube.spacing.s100}>
          <ProgressBar
            currentStep={currentStepIndex + 1}
            arrayLength={steps.length}
          />
          {measure && (
            <Text type="label">
              {currentStepIndex + 1}/{steps.length}
            </Text>
          )}
        </Stack>
        <Text
          type="label"
          appearance="gray"
          size="medium"
          margin="12px 0px 0px 0px"
        >
          {currentStep?.description}
        </Text>
      </Stack>
      {measure && (
        <Stack alignItems="center">
          <Button
            spacing="wide"
            variant="none"
            iconAfter={<MdArrowForward />}
            onClick={() => interceptHandleNext(currentStep!.id)}
          >
            {currentStep?.id === steps.length ? finish : after}
          </Button>
        </Stack>
      )}
    </Grid>
  );
};

export { Assisted };
export type {
  IAssisted,
  IAssistedIStep,
  IAssistedITitleButton,
  IAssistedIProgressBarProps,
};
