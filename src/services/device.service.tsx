import { Device, Devices } from "../models/Device";

export interface IApiResponse<T> {
  data: T | undefined;
}

export const getDevice = async (): Promise<IApiResponse<Devices>> => ({
  data: {
    data: [
      {
        uuid: "123abc",
        product_code: "aecdeffef",
        serial_number: "98948349843",
      },
      {
        uuid: "234bcd",
        product_code: "dokskfffpsfk",
        serial_number: "20938392444",
      },
      {
        uuid: "345cde",
        product_code: "pldepfroenvdfd",
        serial_number: "12120193232",
      },
    ],
  },
});
