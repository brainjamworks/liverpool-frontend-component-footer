import Footer, { EVENT_NAMES } from './components/Footer';
import messages from './i18n/index';
import StudioFooter from './components/studio-footer';
import FooterSlot from './plugin-slots/FooterSlot';
import StudioFooterSlot from './plugin-slots/StudioFooterSlot';

// Liverpool footer styles are managed via test-theme CSS files
// SCSS import removed to prevent interference with custom styling

export default Footer;
export {
  messages, EVENT_NAMES, StudioFooter, FooterSlot, StudioFooterSlot,
};
