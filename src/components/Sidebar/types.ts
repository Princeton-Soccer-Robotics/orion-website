export interface IEntry {
  name: string
  open?: boolean
  path?: string
  children?: IEntry[]
}
