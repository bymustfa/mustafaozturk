# Agent notes

- Do not add Claude/AI signatures, Co-Authored-By trailers, or "Generated with …" lines to commits or pull request descriptions.
- Merging `main` deploys this site through Coolify. Open a pull request and leave the merge to the owner.
- The package manager is pnpm. Install with `pnpm install --frozen-lockfile`, then `pnpm build` and `pnpm start`.
- The Docker image uses Node 22. Coolify builds the Dockerfile and serves the app on port 3000.
