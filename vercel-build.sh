#!/bin/bash
# This is a special build script for Vercel deployment

# Only build the client-side portion with the client-specific vite config
cd client && npx vite build --config vite.config.ts