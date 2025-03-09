import { DashboardLayout } from "@toolpad/core";
import { useDemoRouter } from "@toolpad/core/internal";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { NAVIGATION } from "./utils/nav";
import { mainTheme } from "./utils/mainTheme";
import { AdminPageContent } from "./AdminPageContent";

export const Admin = () => {
  const router = useDemoRouter("/dashboard");

  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      router={router}
      theme={mainTheme}
    >
      <DashboardLayout>
        <AdminPageContent pathname={router.pathname} />
      </DashboardLayout>
    </ReactRouterAppProvider>
  );
};
