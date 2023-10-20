export interface ITodoRecord {
  id: string;
  createdTime: string;
  fields: { Done: boolean | undefined; Name: string };
}
