/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // 이렇게 디자인 토큰값을 정의할 수도 있음.
  // 다만, 이렇게된다면 기존에 적용돼있던 ml-4 or bg-blue-400과 같은 색상들은 모두 사라지게되니 주의!
  theme: {
    colors: {
      primary: "oklch(75% 0.18 154)",
      black: "#000000",
      secondary: "oklch(40% 0.23 283)",
      error: "oklch(54% 0.22 29)",
    },
    spacing: {
      sm: "4px",
      md: "8px",
      lg: "12px",
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
