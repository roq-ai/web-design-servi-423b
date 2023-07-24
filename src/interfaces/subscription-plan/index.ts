import { GetQueryInterface } from 'interfaces';

export interface SubscriptionPlanInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SubscriptionPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
