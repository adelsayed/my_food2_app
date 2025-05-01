# Create a New GitHub Personal Access Token

1. Go to GitHub Settings:
   - Click your profile photo in the top right
   - Click Settings

2. Navigate to Developer Settings:
   - Scroll to the bottom of the left sidebar
   - Click "Developer settings"

3. Create a New Token:
   - Click "Personal access tokens"
   - Click "Tokens (classic)"
   - Click "Generate new token (classic)"

4. Configure Token:
   - Note: "my_food2_app_access"
   - Expiration: 30 days
   - Select these scopes:
     - [✓] repo (Full control of private repositories)
     - [✓] workflow (Update GitHub Action workflows)
     - [✓] write:packages (Upload packages to GitHub Package Registry)
     - [✓] delete:packages (Delete packages from GitHub Package Registry)

5. Click "Generate token"

6. Copy the new token and share it back (it will only be shown once)

This new token will have the necessary permissions to push code to your repository.