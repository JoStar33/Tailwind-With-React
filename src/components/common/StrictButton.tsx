import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// cva에 작성하는 클래스명에 vscode tailwind plugin이 적용되도록 하려면 아래 링크를 참고해서 설정바람.
// https://cva.style/docs/getting-started/installation
// 이때, 기본 클래스가 적용되고 variants에 작성한 값들이 유동적으로 사용될 수 있게 만들어놓음.

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
}

export default function StrictButton({ variant, size, children, ...props }: Props) {
  return (
    <button className={cn(ButtonVariants({ variant, size }))} {...props}>
      {children}
    </button>
  );
}

const ButtonVariants = cva(
  `flex items-center justify-center rounded-xl text-lg font-bold shadow-md transition-all duration-200 hover:scale-105 active:scale-95`,
  {
    variants: {
      variant: {
        default: 'shadow-none active:scale-100',
        grey: 'bg-buttongrey',
        blue: 'bg-blue',
      },
      size: {
        default: '',
        md: 'h-[2.375rem] w-[6.875rem] rounded-md text-[1rem]',
        lg: 'h-[7.5rem] w-[21.875rem] rounded-3xl text-[3rem]',
        wlg: 'h-[5.25rem] w-[24rem] text-[2rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
