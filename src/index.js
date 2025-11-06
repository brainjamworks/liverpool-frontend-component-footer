import Footer, { EVENT_NAMES } from './components/Footer';
import messages from './i18n/index';
import StudioFooter from './components/studio-footer';
import FooterSlot from './plugin-slots/FooterSlot';
import StudioFooterSlot from './plugin-slots/StudioFooterSlot';

// Import Liverpool footer styles
import './_footer.scss';

export default Footer;
export {
  messages, EVENT_NAMES, StudioFooter, FooterSlot, StudioFooterSlot,
};
