import { EnergyPayLoad } from '../models';
import axiosClient from './axiosCient';

const stationAPI = {
  getAll: async () => {
    try {
      const data = await axiosClient.get('/');
      return data.data as EnergyPayLoad[];
    } catch (error) {}

    return undefined;
  },
  getById: async (id: string) => {
    try {
      const { data } = await axiosClient.get<EnergyPayLoad>(`/${id}`);
      return data;
    } catch (error) {}

    return undefined;
  },
};
export default stationAPI;
