import PropTypes from 'prop-types';
import ThemeRtlLayout from './ThemeRtlLayout';
// import SettingsDrawer from './drawer';

// ----------------------------------------------------------------------

ThemeSettings.propTypes = {
  children: PropTypes.node,
};

export default function ThemeSettings({ children }) {
  return (
        <ThemeRtlLayout>
          {children}
          {/* <SettingsDrawer /> */}
        </ThemeRtlLayout>
  );
}
