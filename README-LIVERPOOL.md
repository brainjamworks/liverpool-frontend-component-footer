# Liverpool Dental Custom Footer

University of Liverpool Dental School custom footer component for Open edX MFEs.

## Overview

This is a fork of `@edx/frontend-component-footer` customized for the Liverpool Dental Learning Hub. It provides a navy-gradient footer with Liverpool branding, Poppins typography, and responsive design.

## Features

- **Liverpool Branding**: Navy gradient background (#15376D → #0E2447)
- **Responsive Design**: Single column on mobile (<768px), multi-column on desktop
- **Poppins Typography**: Google Fonts integration with 400 and 600 weights
- **WCAG AAA Compliant**: White on navy = 15.2:1 contrast ratio
- **Configurable Links**: Quick links, resources, and legal sections
- **Language Selector Support**: Inherits from OpenEdX footer component

## Design Tokens

Based on Liverpool Design Language v2.0:

- **Primary Navy**: `#212b58`
- **Navy Dark**: `#15376D`
- **Navy Darker**: `#0E2447`
- **Teal Accent**: `#00A689`
- **White**: `#FFFFFF`

## Installation

### Via npm (from GitHub)

```bash
npm install https://github.com/brainjamworks/liverpool-frontend-component-footer.git#master
```

### Via Tutor Plugin (Recommended)

The `tutor-liverpool-dental` plugin automatically installs this package during MFE builds.

## Usage

### In React Component

```jsx
import LiverpoolFooter from '@liverpool-dental/frontend-component-footer';

<LiverpoolFooter
  logo="https://example.com/liverpool-logo-white.png"
  tagline="Excellence in Dental Continuing Professional Development"
  links={{
    quick_links: [
      { title: 'My Courses', url: '/dashboard' },
      { title: 'Explore Courses', url: '/courses' },
    ],
    resources: [
      { title: 'Help & Support', url: '/help' },
    ],
    legal: [
      { title: 'Terms of Service', url: '/tos' },
      { title: 'Privacy Policy', url: '/privacy' },
    ],
  }}
  copyrightYear={2025}
  showOpenEdxAttribution={true}
/>
```

### Via OpenEdX Plugin Slots (Tutor)

The footer is injected via the `footer_slot` plugin slot in the `tutor-liverpool-dental` plugin:

```javascript
{
  op: PLUGIN_OPERATIONS.Insert,
  widget: {
    id: 'liverpool_footer',
    type: DIRECT_PLUGIN,
    priority: 1,
    RenderWidget: <LiverpoolFooter
      logo={getConfig().LIVERPOOL_FOOTER_LOGO}
      tagline={getConfig().LIVERPOOL_FOOTER_TAGLINE}
      links={getConfig().LIVERPOOL_FOOTER_LINKS}
    />,
  },
}
```

## Configuration

### MFE_CONFIG Values

The footer reads configuration from `getConfig()`:

- `LIVERPOOL_FOOTER_LOGO` - URL to white Liverpool logo
- `LIVERPOOL_FOOTER_TAGLINE` - Tagline text
- `LIVERPOOL_FOOTER_LINKS` - Object with `quick_links`, `resources`, `legal` arrays

### Example MFE_CONFIG

```python
MFE_CONFIG["LIVERPOOL_FOOTER_LOGO"] = "/static/liverpool/images/liverpool-logo-white.png"
MFE_CONFIG["LIVERPOOL_FOOTER_TAGLINE"] = "Excellence in Dental Continuing Professional Development"
MFE_CONFIG["LIVERPOOL_FOOTER_LINKS"] = {
    "quick_links": [
        {"title": "My Courses", "url": "/dashboard"},
        {"title": "Explore Courses", "url": "/courses"},
    ],
    "resources": [
        {"title": "Help & Support", "url": "/help"},
    ],
    "legal": [
        {"title": "Terms of Service", "url": "/tos"},
        {"title": "Privacy Policy", "url": "/privacy"},
    ],
}
```

## Development

### Build

```bash
npm install
npm run build
```

The compiled output will be in `dist/`.

### Local Testing

```bash
npm start
```

This runs a webpack dev server for testing the footer in isolation.

## Component Structure

```
src/
├── components/
│   ├── Footer.jsx          # Main Liverpool footer component
│   ├── Footer.messages.js  # i18n messages
│   └── LanguageSelector.jsx # Language selector (inherited)
├── _footer.scss            # Liverpool footer styles
└── index.js                # Package entry point
```

## Styling

The footer uses BEM naming convention:

- `.liverpool-footer` - Root element
- `.liverpool-footer__container` - Main container
- `.liverpool-footer__branding` - Logo and tagline section
- `.liverpool-footer__links` - Navigation links section
- `.liverpool-footer__bottom` - Copyright section

### Responsive Breakpoints

- Mobile: `< 768px` - Single column layout
- Desktop: `>= 768px` - Grid layout (1fr 2fr)

## Accessibility

- **WCAG AAA Contrast**: White on Navy Dark = 15.2:1
- **Keyboard Navigation**: All links are keyboard accessible
- **Focus Indicators**: Teal outline on focus
- **Semantic HTML**: Proper `<footer>`, `<nav>`, and heading structure
- **ARIA Labels**: Accessible logo link

## License

AGPL-3.0 (inherited from OpenEdX)

## Credits

- Forked from: `@edx/frontend-component-footer`
- Customized for: University of Liverpool Dental School
- Design Language: Liverpool Design Language v2.0
- Developed by: BrainJam Works

## Support

For issues or questions about this footer component:

- **Repository**: https://github.com/brainjamworks/liverpool-frontend-component-footer
- **Issues**: https://github.com/brainjamworks/liverpool-frontend-component-footer/issues

For Liverpool Dental Learning Hub questions:

- **Main Repository**: https://github.com/brainjamworks/liverpool-dental-learning-hub
