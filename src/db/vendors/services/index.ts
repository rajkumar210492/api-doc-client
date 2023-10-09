import { IService } from '~/interfaces';
import { createVendor } from './createVendor';
import { listAllVendors } from './listVendors';
import { findVendor } from './findVendor';

export const services: IService[] = [
  // list array items serial wise
  createVendor,
  listAllVendors,
  findVendor,
];