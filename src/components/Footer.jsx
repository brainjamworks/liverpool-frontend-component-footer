import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';

import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

const LiverpoolFooter = ({
  supportedLanguages,
  onLanguageSelected,
  logo,
  tagline,
  links,
  copyrightYear,
  showOpenEdxAttribution,
}) => {
  const intl = useIntl();
  const { config } = useContext(AppContext);

  const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;

  const externalLinkClickHandler = (event) => {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  };

  // Use config values with fallbacks
  const footerLogo = logo || config.LIVERPOOL_FOOTER_LOGO || config.LOGO_TRADEMARK_URL;
  const footerTagline = tagline || config.LIVERPOOL_FOOTER_TAGLINE || 'Excellence in Dental Continuing Professional Development';
  const footerLinks = links || config.LIVERPOOL_FOOTER_LINKS || {
    quick_links: [
      { title: 'My Courses', url: `${config.LMS_BASE_URL}/dashboard` },
      { title: 'Explore Courses', url: `${config.LMS_BASE_URL}/courses` },
      { title: 'My Profile', url: `${config.LMS_BASE_URL}/u/${config.username || ''}` },
    ],
    resources: [
      { title: 'Help & Support', url: `${config.LMS_BASE_URL}/help` },
      { title: 'Contact Us', url: `${config.LMS_BASE_URL}/contact` },
    ],
    legal: [
      { title: 'Terms of Service', url: `${config.LMS_BASE_URL}/tos` },
      { title: 'Privacy Policy', url: `${config.LMS_BASE_URL}/privacy` },
    ],
  };
  const year = copyrightYear || new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="liverpool-footer"
    >
      <div className="liverpool-footer__container">
        {/* Branding Section */}
        <div className="liverpool-footer__branding">
          <a
            href={config.LMS_BASE_URL}
            aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
            onClick={externalLinkClickHandler}
            className="liverpool-footer__logo-link"
          >
            <img
              src={footerLogo}
              alt="University of Liverpool"
              className="liverpool-footer__logo"
            />
          </a>
          <p className="liverpool-footer__tagline">{footerTagline}</p>
        </div>

        {/* Navigation Links */}
        <div className="liverpool-footer__links">
          {footerLinks.quick_links && footerLinks.quick_links.length > 0 && (
            <div className="liverpool-footer__link-column">
              <h3 className="liverpool-footer__link-heading">Quick Links</h3>
              <ul className="liverpool-footer__link-list">
                {footerLinks.quick_links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      onClick={externalLinkClickHandler}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {footerLinks.resources && footerLinks.resources.length > 0 && (
            <div className="liverpool-footer__link-column">
              <h3 className="liverpool-footer__link-heading">Resources</h3>
              <ul className="liverpool-footer__link-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      onClick={externalLinkClickHandler}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {footerLinks.legal && footerLinks.legal.length > 0 && (
            <div className="liverpool-footer__link-column">
              <h3 className="liverpool-footer__link-heading">Legal</h3>
              <ul className="liverpool-footer__link-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      onClick={externalLinkClickHandler}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Language Selector */}
        {showLanguageSelector && (
          <div className="liverpool-footer__language">
            <LanguageSelector
              options={supportedLanguages}
              onSubmit={onLanguageSelected}
            />
          </div>
        )}
      </div>

      {/* Footer Bottom */}
      <div className="liverpool-footer__bottom">
        <div>
          <p className="liverpool-footer__copyright">
            &copy; {year} University of Liverpool. All rights reserved.
          </p>
          {showOpenEdxAttribution && (
            <p className="liverpool-footer__powered-by">
              Powered by <a href="https://openedx.org" onClick={externalLinkClickHandler}>Open edX</a>
            </p>
          )}
        </div>
        <div className="liverpool-footer__built-by">
          <span className="liverpool-footer__built-by-text">Built by</span>
          <a href="https://brainjam.works" target="_blank" rel="noopener noreferrer" onClick={externalLinkClickHandler}>
            <img
              src={config.BRAINJAM_LOGO_URL || 'https://brainjam.works/logo.png'}
              alt="BrainJam"
              className="liverpool-footer__built-by-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

LiverpoolFooter.propTypes = {
  logo: PropTypes.string,
  tagline: PropTypes.string,
  links: PropTypes.shape({
    quick_links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })),
    resources: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })),
    legal: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })),
  }),
  copyrightYear: PropTypes.number,
  showOpenEdxAttribution: PropTypes.bool,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

LiverpoolFooter.defaultProps = {
  logo: undefined,
  tagline: 'Excellence in Dental Continuing Professional Development',
  links: undefined,
  copyrightYear: undefined,
  showOpenEdxAttribution: true,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default LiverpoolFooter;
export { EVENT_NAMES };
