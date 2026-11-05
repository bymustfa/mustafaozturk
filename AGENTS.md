# Agent notes

- Do not add Claude/AI signatures, Co-Authored-By trailers, or "Generated with …" lines to commits or pull request descriptions.
- Merging `main` deploys this site through Coolify. Open a pull request and leave the merge to the owner.
- Keep the Docker image on Node 20. The production build is `yarn build`, then `yarn start` on port 3000.
