# Proposal: Fix Retrieval Moment Logic

## Problem
The "Retrieval Moment" is being displayed on the first plateau visited in a session. According to the `navigation` spec, it should only appear after the reader has visited 3 or more plateaus.

## Proposed Solution
Update the logic to correctly check the number of visited plateaus before displaying the retrieval moment.