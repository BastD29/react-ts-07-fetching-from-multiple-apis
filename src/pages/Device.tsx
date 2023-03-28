import { useCallback, useState } from "react";
import { Devices } from "../models/Device";
import { WorkingSession, WorkingSessions } from "../models/WorkingSession";
import { getDevice, IApiResponse } from "../services/device.service";
import { getWorkingSession } from "../services/workingSession";

export default function Device() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deviceData, setDeviceData] = useState<Devices | undefined>(undefined);
  const [workingSessionData, setWorkingSessionData] = useState<
    WorkingSessions | undefined
  >(undefined);
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const deviceDataResponse: IApiResponse<Devices> = await getDevice();
      if (deviceDataResponse?.data) {
        setDeviceData(deviceDataResponse.data);
      }

      const workingSessionDataResponse: IApiResponse<WorkingSessions> =
        await getWorkingSession();
      if (workingSessionDataResponse?.data) {
        setWorkingSessionData(workingSessionDataResponse.data);
      }

      //   const [deviceData, workingSessionData] = await Promise.all([
      //     deviceDataResponse,
      //     workingSessionResponse,
      //   ]);
    } catch (error) {
      console.error();
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSelect = (uuid: string) => {
    setSelectedUuid(uuid);
  };

  const filteredDeviceData = deviceData?.data.filter(
    (device) => device.uuid === selectedUuid
  );

  const filteredWorkingSessionData = workingSessionData?.data.filter(
    (workingSession) => workingSession.uuid === selectedUuid
  );

  return (
    <>
      <button onClick={fetchData}>Fetch data</button>
      {deviceData && (
        <>
          <br />
          <select onChange={(e) => handleSelect(e.target.value)}>
            <option value="">Select a UUID</option>
            {deviceData?.data.map((device) => (
              <option key={device.uuid} value={device.uuid}>
                {device.uuid}
              </option>
            ))}
          </select>
        </>
      )}
      {selectedUuid && (
        <>
          <h2>Device data</h2>
          <ul>
            {filteredDeviceData?.map((device) => (
              <li key={device.uuid}>
                <p>uuid: {device.uuid}</p>
                <p>product code: {device.product_code}</p>
                <p>serial number: {device.serial_number}</p>
              </li>
            ))}
          </ul>
          <h2>Working session data</h2>
          <ul>
            {filteredWorkingSessionData?.map((workingSession) => (
              <li key={workingSession.uuid}>
                <p>uuid: {workingSession.uuid}</p>
                <p>product code: {workingSession.start_date}</p>
                <p>serial number: {workingSession.end_date}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
