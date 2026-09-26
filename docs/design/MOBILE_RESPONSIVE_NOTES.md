# Mobile responsive behavior

The patient homepage, WHY ODRISC page, and shared patient menu use mobile-only
overrides at viewport widths up to 760px. Desktop presentation is unchanged.

- Homepage hero heading uses four explicit mobile lines: “Understand”, “your
  health.”, “Follow your”, and “baby’s growth.”. “See the whole picture.” stays
  on one line with a 16px gap above it and responsive type sized to fit.
- WHY ODRISC hero typography scales within the available width, retaining the
  requested four heading lines. The mobile text group is vertically centred,
  preserving its existing internal margins.
- Its mobile hero description uses the full content width, retaining original
  font sizing and 1.7 line height, with left alignment (not justified).
- Descriptions outside image frames use the full available content column.
- The founding image uses a square mobile frame and centred `contain` sizing
  to retain the complete image without cropping, distortion, or letterboxing.
- Homepage Pregnancy Care, Join our Community, and Talk to Us markers share a
  content-based gap rather than offsets dependent on text height.
- The third, wider Pregnancy Care frame is 25% taller on mobile (32.5vw high,
  increased from 26vw), retaining its existing width and image positioning.
- Menu cards adapt their image and text columns; the menu supports safe-area
  padding, full dynamic-viewport coverage, and vertical scrolling.
- Keyboard focus remains visible through color/underline treatment without borders.
- Short mobile viewports (500px high or less) use compact hero typography and a
  minimum image-stage height. Homepage story images use `contain` in this case to
  avoid extreme portrait-image cropping in landscape.
- Existing Motion components, scroll mappings, reduced-motion preferences, copy,
  routes, calls to action, font family, and desktop styles are retained.

Browser review covers 320, 360, 390, 430, 600, and 760px portrait widths and a
667×375 landscape viewport. Automated formatting, lint, type checking, test suites,
and the production build require the user's explicit request.

## Shared patient/provider gateway

The gateway uses a plain white page background and centred copyright at all
screen sizes. On mobile, the hero eyebrow, heading, and description align with
the logo's left edge; the provider card heading breaks into “Healthcare” and
“provider”. Desktop provider heading line breaks are unchanged.
The gateway header retains the full ODRISC wordmark at every width, sizing it
from 96px to 144px. A two-column grid aligns the animated tagline vertically
with the logo and allows balanced wrapping in the remaining space. Other
pages retain their existing logo behavior.
On mobile the gateway tagline is 2px smaller than its desktop-responsive base
size and remains vertically centred with the full logo.
