import { QUERY_TAGS } from "../data/queryTags";
import { apiSlice } from "./apiSlice";

interface DeviceProps {
  roomNumber: string;
  deviceName: string;
  ipAddress: string;
  addedBy: string;
  deviceType: string;
}

interface EditDeviceProps {
  roomNumber: string;
  deviceName: string;
  ipAddress: string;
  _id: string;
}

interface DeviceAddResponseProps {
  status: boolean;
  device?: DeviceProps;
  message?: string;
}

interface DeviceEditResponseProps {
  status: boolean;
  device?: EditDeviceProps;
  message?: string;
}

interface GetAllDeviceProps {
  _id: string;
  addedBy: string;
  addedOn: string;
  deviceName: string;
  ipAddress: string;
  roomNumber: string;
  deviceType: string;
}

interface DeviceByTypeResponseProps extends GetAllDeviceProps {}

const deviceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDevices: builder.query<GetAllDeviceProps[], undefined>({
      query: () => "/device/get-all-devices",
      providesTags: [QUERY_TAGS.allDevices],
    }),
    getDevicesByType: builder.query<DeviceByTypeResponseProps[], string>({
      query: (deviceType) =>
        `/device/get-devices-by-type?deviceType=${deviceType}`,
      providesTags: [QUERY_TAGS.allDevices],
    }),
    addDevice: builder.mutation<DeviceAddResponseProps, DeviceProps>({
      query: (device) => ({
        url: "/device/add-device",
        method: "POST",
        body: device,
      }),
      invalidatesTags: [QUERY_TAGS.allDevices],
    }),
    editDevice: builder.mutation<DeviceEditResponseProps, EditDeviceProps>({
      query: (device) => ({
        url: "/device/edit-device",
        method: "PUT",
        body: device,
      }),
      invalidatesTags: [QUERY_TAGS.allDevices],
    }),
    removeDevice: builder.mutation<{}, string>({
      query: (deviceId) => ({
        url: "/device/remove-device",
        method: "DELETE",
        body: { _id: deviceId },
      }),
      invalidatesTags: [QUERY_TAGS.allDevices],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllDevicesQuery,
  useGetDevicesByTypeQuery,
  useAddDeviceMutation,
  useEditDeviceMutation,
  useRemoveDeviceMutation,
} = deviceApiSlice;
