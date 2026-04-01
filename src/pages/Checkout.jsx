// Checkout page — $5 one-time payment via Stripe
// Calls netlify/functions/create-checkout to get a Stripe Checkout session URL
// On success (stripe redirect back): Stripe webhook updates DB, redirect to /onboarding
