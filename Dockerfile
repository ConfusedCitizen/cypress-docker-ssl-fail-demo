FROM cypress/browsers:latest

WORKDIR /e2e

# Copy files
COPY package.json package-lock.json ./

# Install dependencies + Cypress
RUN npm ci && npx cypress cache clear && npx cypress install

COPY . ./

# Verify Cypress is installed properly (catches environment issues ASAP)
RUN npx cypress verify
