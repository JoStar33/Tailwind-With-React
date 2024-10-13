import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  // 테일윈드 클래스 충돌이슈 해결
  // clsx를 활용해 조건부 클래스가 쉽게 적용되도록 만듦.
  return twMerge(clsx(inputs));
};
