import { FeedbackInterface } from 'interfaces/feedback';
import { ClientInterface } from 'interfaces/client';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  client_id?: string;
  manager_id?: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  client?: ClientInterface;
  user?: UserInterface;
  _count?: {
    feedback?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  client_id?: string;
  manager_id?: string;
}
