import type { DemoName } from "@/data/caseStudies";

import { ApprovalResetDemo } from "./ApprovalResetDemo";
import { EvaluationStageDemo } from "./EvaluationStageDemo";

/** Case Study 의 demo 블록이 이름으로 고르는 위젯 */
export function Demo({ name }: { name: DemoName }) {
  switch (name) {
    case "evaluation-stage":
      return <EvaluationStageDemo />;
    case "approval-reset":
      return <ApprovalResetDemo />;
  }
}

export { ApprovalResetDemo, EvaluationStageDemo };
