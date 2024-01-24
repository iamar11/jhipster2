import { IUser } from 'app/shared/model/user.model';
import { IRecette } from 'app/shared/model/recette.model';

export interface IComment {
  id?: number;
  content?: string | null;
  user?: IUser | null;
  recette?: IRecette | null;
}

export const defaultValue: Readonly<IComment> = {};
