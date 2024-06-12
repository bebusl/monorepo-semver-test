export default {
  tagFormat: "@bebusl/monorepo-package1@${version}",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "docs", scope: "README", release: "patch" },
          { type: "feat", scope: "package1", release: "minor" },
          { type: "fix", scope: "package1", release: "patch" },
          { type: "refactor", scope: "package1", release: "patch" },
          { type: "style", scope: "package1", release: "patch" },
          { type: "perf", scope: "package1", release: "patch" },
          { type: "revert", scope: "package1", release: "patch" },
          { type: "move", scope: "package1", release: false },
          { type: "remove", scope: "package1", release: false },
          { type: "chore", scope: "package1", release: false },
          { type: "ci", scope: "package1", release: false },
          { type: "test", scope: "package1", release: false },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
        scopes: ["package1", "root"],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "feat",
              scope: "README",
              section: "✨ Features",
              hidden: false,
            },
            { type: "fix", section: "🐛 Bug Fixes", hidden: false },
            { type: "perf", section: "🌈 Performance", hidden: false },
            { type: "refactor", section: "♻️ Refactor", hidden: false },
            { type: "docs", section: "📝 Docs", hidden: false },
            { type: "style", section: "💄 Styles", hidden: false },
            { type: "revert", section: "🕐 Reverts", hidden: false },
            { type: "ci", section: "💫 CI/CD", hidden: false },
            { type: "test", section: "✅ Tests", hidden: true },
            { type: "move", section: "🚚 Move Files", hidden: true },
            { type: "remove", section: "🔥 Remove Files", hidden: true },
          ],
        },
        scope: ["package1", "root"],
      },
    ],
    ["@semantic-release/changelog", { scope: ["package1", "root"] }],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
  packages: ["@bebusl/monorepo-package1"],
};
