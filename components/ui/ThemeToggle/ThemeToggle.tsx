import { Moon, Sun } from '@components/icons';
import { useTheme } from 'next-themes';

const ThemeToggle = ({ className = '' }) => {
  const { setTheme, theme } = useTheme();
  return (
    <button
      className={className}
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;
