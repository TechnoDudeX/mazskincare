// Netlify Function: stripe-webhook
// POST — handles Stripe webhook events
// Verifies signature with STRIPE_WEBHOOK_SECRET
// On checkout.session.completed: sets profiles.has_paid = true in Supabase (service role key)
