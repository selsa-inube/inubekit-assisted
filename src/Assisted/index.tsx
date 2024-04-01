import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";

import { Button } from "@inubekit/button";
import { Grid } from "@inubekit/grid";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { useMediaQuery } from "@inubekit/hooks";
import { inube } from "@inubekit/foundations";

import {
  StyledConstentAssisted,
  StyledProgressBar,
  StyledProgressIndicator,
  StyledStepIndicator,
} from "./styles";

type IStep = {
  id: number;
  label: string;
  description?: string;
};

interface IProgressBarProps {
  currentStep: IStep["id"];
  arrayLength: number;
}

type ITitleButton = {
  before?: string;
  after?: string;
  finish?: string;
};

interface IAssisted {
  steps: IStep[];
  currentStepId: IStep["id"];
  handlePrev: (id: IStep["id"]) => void;
  handleNext: (id: IStep["id"]) => void;
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

  const measure = useMediaQuery("(min-width: 600px)");

  const currentStep = steps.find((step) => step?.id === currentStepId);

  const currentStepIndex = steps.findIndex(
    (step) => step?.id === currentStepId
  );

  return (
    <StyledConstentAssisted>
      <Grid templateColumns={!measure ? "1fr" : "auto 1fr auto"}>
        {measure && (
          <Stack alignItems="center">
            <Button
              spacing="wide"
              variant="none"
              iconBefore={<MdArrowBack />}
              onClick={() => interceptHandlePrev(currentStep!.id)}
              appearance={
                inube.assisted.button.appearance as keyof typeof inube.button
              }
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
                appearance={
                  inube.assisted.button.appearance as keyof typeof inube.text
                }
                icon={<MdArrowBack style={{ padding: "2px 0px" }} />}
                size="20px"
                onClick={() => interceptHandlePrev(currentStep!.id)}
                disabled={currentStepIndex === 0}
              />
            )}
            <StyledStepIndicator>
              {currentStepId !== steps.length ? (
                <Text
                  type="label"
                  size="medium"
                  appearance={
                    inube.assisted.button.appearance as keyof typeof inube.text
                  }
                >
                  {currentStepId}
                </Text>
              ) : (
                <Icon
                  appearance={
                    inube.assisted.button.appearance as keyof typeof inube.icon
                  }
                  icon={<MdCheckCircle />}
                  size="20px"
                  spacing="compact"
                />
              )}
            </StyledStepIndicator>
            <Text
              type="title"
              size={measure ? "medium" : "small"}
              appearance={
                inube.assisted.title.appearance as keyof typeof inube.text
              }
              ellipsis
            >
              {currentStep?.label}
            </Text>
            {!measure && (
              <Icon
                appearance={
                  inube.assisted.button.appearance as keyof typeof inube.icon
                }
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
            {measure && (
              <Text type="label">
                {currentStepIndex + 1}/{steps.length}
              </Text>
            )}
          </Stack>
          <Text
            type="label"
            appearance={
              inube.assisted.description.appearance as keyof typeof inube.text
            }
            size="medium"
            margin="12px 0px 0px 0px"
          >
            {currentStep?.description}
          </Text>
        </Stack>
        {measure && (
          <Stack alignItems="center">
            <Button
              appearance={
                inube.assisted.button.appearance as keyof typeof inube.button
              }
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
