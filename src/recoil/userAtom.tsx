import { atom } from 'recoil';

export const userAtom = atom({
  key: 'userInfo',
  default: {
    sub: '',
    nickName: '',
    oneMission: '',
    twoMission: '',
    threeMission: '',
    fourMission: '',
    fiveMission: '',
  },
});
