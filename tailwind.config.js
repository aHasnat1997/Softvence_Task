// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'scale-out-up': {
          '0%': { transform: 'scale(1) translateY(0)', opacity: 1 },
          '100%': { transform: 'scale(0) translateY(-40%)', opacity: 0 },
        },
        'scale-in-down': {
          '0%': { transform: 'scale(0) translateY(40%)', opacity: 0 },
          '100%': { transform: 'scale(1) translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'scale-out-up': 'scale-out-up 0.3s ease forwards',
        'scale-in-down': 'scale-in-down 0.3s ease forwards',
      },
    },
  },
};
