import { atom } from "jotai";

export const tokenGL = atom(undefined)
export const perEmailGL = atom('')

export const clientWidth =  document.documentElement.clientWidth;
export const clientHeight =  document.documentElement.clientHeight;
export const roadWidth  = clientWidth*0.01;
export const bushWidth  = clientWidth*0.05;