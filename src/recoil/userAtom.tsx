import { atom } from 'recoil';

export const userAtom = atom({
  key: 'userInfo',
  default: {
    id: '',
    nickName: '',
    oneMission: '',
    twoMission: '',
    threeMission: '',
    fourMission: '',
    fiveMission: '',
  },
});
