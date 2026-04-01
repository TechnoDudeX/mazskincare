// Netlify Function: create-checkout
// POST — creates a Stripe Checkout session for the $5 one-time payment
// Input: { userId } (from auth header or body)
// Returns: { url } — Stripe-hosted checkout URL
// On payment success, Stripe fires stripe-webhook which marks user as paid in Supabase
