export interface IPrize {
  name: string;
  feature: string;
  type: EPrizeTypes;
  image: string;
  description: string;
}

export enum EPrizeTypes {
  SYMPHONY_SECURITY = 'Symphony Security',
  SYMPHONY_MDR = 'Symphony MDR',
  SYMPHONY_EDR = 'Symphony EDR',
  SYMPHONY_XDR = 'Symphony XDR',
}
