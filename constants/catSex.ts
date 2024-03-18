import { Gender } from '@prisma/client';

export const catSex: { [key: string]: string } = {
  MALE: 'Kocury',
  FEMALE: 'Kotki',
  KID: 'Kocięta',
};

export const catSexOptions: Record<string, Gender> = {
  Kocury: 'MALE',
  Kotki: 'FEMALE',
  Kocięta: 'KID',
};
