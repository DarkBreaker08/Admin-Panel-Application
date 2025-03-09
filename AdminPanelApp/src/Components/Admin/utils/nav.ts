import { Navigation } from "@toolpad/core";

export const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
  },
  {
    segment: "tasks",
    title: "Tasks",
  },
  {
    segment: "pricing",
    title: "Pricing",
  },
  {
    segment: "gallery",
    title: "Gallery",
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "users",
    title: "New Users",
  },
  {
    segment: "averageTime",
    title: "Average Time",
  },
  {
    segment: "newDownloads",
    title: "New Downloads",
  },
  {
    segment: "revenue",
    title: "Revenue",
  },
];
