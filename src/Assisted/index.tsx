import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";

import { Button } from "@inubekit/button";
import { Grid } from "@inubekit/grid";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import {
  StyledProgressBar,
  StyledProgressIndicator,
  StyledStepIndicator,
  StyledGridContainer,
} from "./styles";
import { IProgressBarProps, ISize, IStep, ITitleButton } from "./props";

interface IAssisted {
  currentStepId: IStep["id"];
  handlePrev: (id: IStep["id"]) => void;
  handleNext: (id: IStep["id"]) => void;
  steps: IStep[];
  size?: ISize;
  titleButtonText?: ITitleButton;
}

const ProgressBar = (props: IProgressBarProps) => {
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
    size = "large",
    currentStepId,
    handlePrev,
    handleNext,
    titleButtonText: { before, after, finish } = {
      before: "Prev",
      after: "Next",
      finish: "Send",
    },
  } = props;

  const interceptHandlePrev = (id: IStep["id"]) => {
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

  const interceptHandleNext = (id: IStep["id"]) => {
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

  const currentStep = steps.find((step) => step?.id === currentStepId);

  const currentStepIndex = steps.findIndex(
    (step) => step?.id === currentStepId,
  );

  return (
    <StyledGridContainer size={size}>
      <Grid templateColumns={size === "small" ? "1fr" : "auto 1fr auto"}>
        {size === "large" && (
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
            {size === "small" && (
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
            <Text
              type="title"
              size={size === "large" ? "medium" : "small"}
              ellipsis
            >
              {currentStep?.label}
            </Text>
            {size === "small" && (
              <Icon
                appearance="primary"
                icon={<MdArrowForward style={{ padding: "0px 2px" }} />}
                size="20px"
                onClick={() => interceptHandleNext(currentStep!.id)}
              />
            )}
          </Grid>
          <Stack alignItems="center" gap="8px">
            <ProgressBar
              currentStep={currentStepIndex + 1}
              arrayLength={steps.length}
            />
            {size === "large" && (
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
        {size === "large" && (
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
    </StyledGridContainer>
  );
};

export { Assisted };
export type { IAssisted };
