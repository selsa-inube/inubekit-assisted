import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";

import { Button } from "@inubekit/button";
import { Grid } from "@inubekit/grid";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import {
  StyledConstentAssisted,
  StyledProgressBar,
  StyledProgressIndicator,
  StyledStepIndicator,
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
    size = "large",
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

  const theme: typeof inube = useContext(ThemeContext);

  const assistedButtonAppearance =
    theme?.assisted?.button?.appearance || inube.assisted.button.appearance;

  const assistedDescriptionAppearance =
    theme?.assisted?.description?.appearance ||
    inube.assisted.description.appearance;

  const assistedTitleAppearance =
    theme?.assisted?.title?.appearance || inube.assisted.title.appearance;

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
    <StyledConstentAssisted size={size}>
      <Grid templateColumns={size === "small" ? "1fr" : "auto 1fr auto"}>
        {size === "large" && (
          <Stack alignItems="center">
            <Button
              spacing="wide"
              variant="none"
              iconBefore={<MdArrowBack />}
              onClick={() => interceptHandlePrev(currentStep!.id)}
              appearance={assistedButtonAppearance as keyof typeof inube.button}
              disabled={currentStepIndex === 0}
            >
              {before}
            </Button>
          </Stack>
        )}

        <Stack direction="column" margin="0 0 6px 0">
          <Grid templateColumns="auto auto 1fr auto" gap="8px">
            {size === "small" && (
              <Icon
                appearance={
                  assistedButtonAppearance as keyof typeof inube.button
                }
                icon={<MdArrowBack />}
                size="20px"
                onClick={() => interceptHandlePrev(currentStep!.id)}
                disabled={currentStepIndex === 0}
                spacing="compact"
              />
            )}
            <StyledStepIndicator>
              {currentStepId !== steps.length ? (
                <Text
                  type="label"
                  size="medium"
                  appearance={
                    assistedButtonAppearance as keyof typeof inube.text
                  }
                >
                  {currentStepId}
                </Text>
              ) : (
                <Icon
                  appearance={
                    assistedButtonAppearance as keyof typeof inube.icon
                  }
                  icon={<MdCheckCircle />}
                  size="20px"
                  spacing="compact"
                />
              )}
            </StyledStepIndicator>
            <Text
              type="title"
              size={size === "large" ? "medium" : "small"}
              appearance={assistedTitleAppearance as keyof typeof inube.text}
              ellipsis
              margin="0 0 0 10px"
              padding="2px 0 0 0"
            >
              {currentStep?.label}
            </Text>
            {size === "small" && (
              <Icon
                appearance={assistedButtonAppearance as keyof typeof inube.icon}
                icon={<MdArrowForward />}
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
            appearance={
              assistedDescriptionAppearance as keyof typeof inube.text
            }
            size="medium"
            margin="12px 0px 0px 0px"
          >
            {currentStep?.description}
          </Text>
        </Stack>
        {size === "large" && (
          <Stack alignItems="center">
            <Button
              appearance={assistedButtonAppearance as keyof typeof inube.button}
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
    </StyledConstentAssisted>
  );
};

export { Assisted };
export type { IAssisted };
