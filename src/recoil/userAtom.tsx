import { atom } from 'recoil';

export const userAtom = atom({
  key: 'userInfo',
  default: {
    sub: '',
    nickName: '',
    oneMission: false,
    twoMission: false,
    threeMission: false,
    fourMission: false,
    fiveMission: false,
  },
});
