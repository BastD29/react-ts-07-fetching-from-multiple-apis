import { WorkingSessions } from "../models/WorkingSession";
import { IApiResponse } from "./device.service";

export const getWorkingSession = async (): Promise<
  IApiResponse<WorkingSessions>
> => ({
  data: {
    data: [
      {
        uuid: "123abc",
        start_date: "2020-09-12",
        end_date: "2020-09-21",
      },
      {
        uuid: "234bcd",
        start_date: "2019-09-12",
        end_date: "2019-09-21",
      },
      {
        uuid: "345cde",
        start_date: "2018-09-12",
        end_date: "2018-09-21",
      },
    ],
  },
});
