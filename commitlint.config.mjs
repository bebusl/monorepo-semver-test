export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["root", "package1", "package2"]],
    "scope-empty": [2, "never"],
  },
};
