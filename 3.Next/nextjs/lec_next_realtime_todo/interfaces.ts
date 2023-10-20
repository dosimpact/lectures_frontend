export interface Record {
  id: string;
  createdTime: string;
  fields: { Done: boolean | undefined; Name: string };
}
