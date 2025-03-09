import { AverageTime } from "./AdminPageComponents/AverageTime/AverageTime";
import { Dashboard } from "./AdminPageComponents/Dashboard/Dashboard";
import { Gallery } from "./AdminPageComponents/Gallery/Gallery";
import { NewDownloads } from "./AdminPageComponents/NewDownloads/NewDownloads";
import { NewUsers } from "./AdminPageComponents/NewUsers/NewUsers";
import { Pricing } from "./AdminPageComponents/Pricing/Pricing";
import { Revenue } from "./AdminPageComponents/Revenue/Revenue";
import { TasksContent } from "./AdminPageComponents/TasksContent/TasksContent";

type AdminPageContentProps = {
  pathname: string;
};

export const AdminPageContent = ({ pathname }: AdminPageContentProps) => {
  switch (pathname) {
    case "/dashboard":
      return <Dashboard />;
    case "/tasks":
      return <TasksContent />;
    case "/pricing":
      return <Pricing />;
    case "/gallery":
      return <Gallery />;
    case "/users":
      return <NewUsers />;
    case "/averageTime":
      return <AverageTime />;
    case "/newDownloads":
      return <NewDownloads />;
    case "/revenue":
      return <Revenue />;
  }
};
