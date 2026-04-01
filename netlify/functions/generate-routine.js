// Netlify Function: generate-routine
// POST — calls Claude API to generate a personalized skincare routine
// Input: { userId, skinType, concerns, products }
// Verifies user is authenticated + has_paid before proceeding
// Returns: { routine } — structured routine object saved to Supabase
