// Modern Design System
export const colors = {
  // Primary palette - Soft blues and purples
  primary: {
    50: '#F0F4FF',
    100: '#E0EAFF',
    200: '#C7D7FE',
    300: '#A5B8FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },

  // Accent colors
  accent: {
    purple: '#A78BFA',
    pink: '#F472B6',
    teal: '#2DD4BF',
    orange: '#FB923C',
  },

  // Neutrals
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Semantic colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Backgrounds
  background: {
    light: '#FFFFFF',
    lightSecondary: '#F9FAFB',
    dark: '#0F172A',
    darkSecondary: '#1E293B',
  },

  // Text
  text: {
    light: {
      primary: '#111827',
      secondary: '#6B7280',
      tertiary: '#9CA3AF',
    },
    dark: {
      primary: '#F9FAFB',
      secondary: '#D1D5DB',
      tertiary: '#9CA3AF',
    },
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 5,
  },
};

export const typography = {
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

// Export for themed components compatibility
export const Colors = {
  light: {
    text: colors.text.light.primary,
    background: colors.background.light,
    tint: colors.primary[600],
    icon: colors.gray[500],
    tabIconDefault: colors.gray[400],
    tabIconSelected: colors.primary[600],
  },
  dark: {
    text: colors.text.dark.primary,
    background: colors.background.dark,
    tint: colors.primary[400],
    icon: colors.gray[400],
    tabIconDefault: colors.gray[500],
    tabIconSelected: colors.primary[400],
  },
};

