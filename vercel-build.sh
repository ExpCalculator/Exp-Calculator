#!/bin/bash
# This is a special build script for Vercel deployment

# Copy the index.html to reference the Vercel entry point
cp client/index.html client/index.vercel.html
sed -i 's|src="/src/main.tsx"|src="/src/vercel-entry.tsx"|g' client/index.vercel.html

# Build the client-side portion for Vercel deployment
cd client && npx vite build --config vite.config.ts --emptyOutDir