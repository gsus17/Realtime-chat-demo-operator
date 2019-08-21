/**
 * Message.
 */
export interface Message {
  uidChat?: string;
  from: string;
  name: string;
  date: Date;
  message: string;
  to: string;
}
