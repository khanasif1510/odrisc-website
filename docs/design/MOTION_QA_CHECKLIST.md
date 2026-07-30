# ODRISC Motion QA Checklist

## Identity

- Motion ID:
- Page ID:
- Component:
- Audience:
- Market:
- Language:
- Reviewer:
- Review date:

## Purpose

- [ ] The motion has a documented purpose
- [ ] The motion improves understanding
- [ ] The same meaning exists without motion
- [ ] The motion supports the Website Story

## Tokens

- [ ] Approved duration token is used
- [ ] Approved easing token is used
- [ ] Approved distance token is used
- [ ] Stagger is within approved limits
- [ ] No arbitrary motion values are introduced

## Accessibility

- [ ] Reduced-motion behavior is implemented
- [ ] Focus remains correct
- [ ] State changes are announced
- [ ] Meaning does not depend on motion
- [ ] Flashing and repeated pulsing are absent
- [ ] The animation can be paused where required

## Product and Clinical Integrity

- [ ] Product Status is accurate
- [ ] Concept animation is labeled
- [ ] Real-time capability is not implied
- [ ] Clinical values remain accurate
- [ ] Scale, baseline, and chronology are preserved
- [ ] Risk is not presented as diagnosis

## Performance

- [ ] `transform` and `opacity` are preferred
- [ ] No material layout shift occurs
- [ ] Mobile performance is acceptable
- [ ] Offscreen looping is absent
- [ ] Bundle impact is justified
- [ ] Animation stops when no longer useful

## Responsive and RTL

- [ ] Mobile motion is simplified
- [ ] RTL direction is correct
- [ ] Arabic labels remain readable
- [ ] Chronological direction remains understandable
- [ ] Long translations do not break the sequence

## Result

- [ ] Approved
- [ ] Approved with revisions
- [ ] Requires accessibility revision
- [ ] Requires performance revision
- [ ] Requires clinical review
- [ ] Requires RTL revision
- [ ] Rejected