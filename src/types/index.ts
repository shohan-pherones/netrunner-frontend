export interface TInputs<T> {
  label: string;
  name: keyof T;
  type?: string;
  placeholder: string;
}
