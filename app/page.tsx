"use client";

import { TasksList } from "@/components/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <CopilotKit publicApiKey={"ck_pub_936e188519838c019c037a9a3783b223"}>
      <TasksProvider>
        <TasksList />
      </TasksProvider>
      <CopilotPopup />
    </CopilotKit>
  );
}
