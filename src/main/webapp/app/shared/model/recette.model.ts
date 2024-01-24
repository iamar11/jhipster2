import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { IComment } from 'app/shared/model/comment.model';

export interface IRecette {
  id?: number;
  title?: string;
  description?: string;
  date?: dayjs.Dayjs | null;
  user?: IUser | null;
  comments?: IComment[] | null;
}

export const defaultValue: Readonly<IRecette> = {};
