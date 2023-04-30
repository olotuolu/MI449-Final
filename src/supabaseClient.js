import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://wiyidiplfkmtqsyklbhq.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeWlkaXBsZmttdHFzeWtsYmhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MDcwOTAsImV4cCI6MTk5ODI4MzA5MH0.ZHCxeEKo5xhtY0uknAmSBf36eyj72TZSRQsyTwRZO6Y'

export const supabase = createClient(supabaseUrl, supabaseKey)