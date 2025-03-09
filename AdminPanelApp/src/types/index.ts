import { InferType } from "yup";
import { adminLoginSchema } from "../utils";
import { store } from "../store/store";

export type AdminLoginData = InferType<typeof adminLoginSchema>;

export type successfullSubmitType = {
  isAdminLogged: boolean;
};

export type RootState = ReturnType<typeof store.getState>;

export type Task = {
  description: string;
  time: number;
  id: string;
};

export type TaskDto = {
  description: string;
  time: string | number;
};

export type Statistics = {
  averageTime: {
    day: string;
    averageTime: number;
  }[];
  newDownloads: {
    day: string;
    newDownloads: number;
  }[];
  newUsers: {
    day: string;
    newUsers: number;
  }[];
  revenue: {
    day: string;
    revenue: number;
  }[];
  revenueAndDownloads: {
    day: string;
    revenue: number;
    newDownloads: number;
  }[];
};

export type User = {
  name: string;
  lastName: string;
  id: string;
};
