# GitHub Authentication Setup

1. Create a Personal Access Token (PAT):
   - Go to https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it "my_food2_app_token"
   - Select scopes:
     - ✓ repo (Full control of private repositories)
   - Click "Generate token"
   - COPY THE TOKEN IMMEDIATELY (you won't see it again)

2. Store your credentials:
```bash
git config --global credential.helper store
```

3. When you push your code for the first time:
   - Username: adelsayed
   - Password: [Use the Personal Access Token you copied]

Example:
```bash
git push -u origin main
# It will prompt for credentials
# Username: adelsayed
# Password: [Paste your Personal Access Token]
```

After entering these credentials once, Git will remember them for future operations.