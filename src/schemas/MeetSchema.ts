export default interface MeetSchema {
  id: number;
  title: string;
  date: Date;
  description: string;
  thumbnail: string;
  patreon: boolean;
  legendary: boolean;
  initiator?: string;
  initiator_vrc?: string;
}
