# Production master — draft pending component BOM

The existing `gloomhaven-visual-reference.html` is now the production worksheet.
All 13 original WebP covers and the customer guide are unchanged.

## Confirmed source data

Pack totals from `index.html` on main: GU-01–GU-13 =
28, 32, 26, 28, 23, 41, 29, 20, 24, 38, 28, 14, 8 = **339** pieces.
Component families come from the original visual reference, not an independently
verified regrouped component BOM. In particular, combined families such as
Stone / Wood Doors may need splitting when the confirmed BOM is supplied.

## Required to finish

The provided conversation preview has no component quantities or measured
weights, and no conversation-reading tool was available in this session.
Enter the final component allocations and known measured weights in
`production-data.js`. Quantities are deliberately null rather than inferred
from pack totals. Every current unit weight is an unvalidated, provisional
conservative planning allowance, not a measurement or slicer result. No geometry,
dimensions, infill, resin hollowing or support settings were available to verify
these allowances. They are not guaranteed upper bounds.

Material and single-color assignments are suggestions. Transparent components
share clear resin; opaque components use the listed single stock color. Confirm
material suitability and final color choices before purchasing.

## Calculation

Edit `SAFETY_MARGIN = 0.20` in `production-data.js`. Net grams are quantity ×
unit grams, summed by material and color. Purchase grams are net × (1 + margin),
without intermediate rounding. Margin is a planning allowance for loss/supports,
not measured waste. Resin is reported by mass; no unsupported volume conversion
or bottle/spool rounding is assumed. Unknown rows suppress affected totals, and
the overall draft warning remains until component counts reconcile with all
pack totals and 339 pieces. Search never changes purchase totals. Print includes
all packs even when search is active.

Measured weights should use `weightStatus: "measured"` and record source and
measurement conditions in `weightSource`. Review print preview before saving PDF.
