// Skip Husky install in production and CI

console.log("HUSKY", process.env.NODE_ENV, process.env.CI);
if (process.env.NODE_ENV === "production" || process.env.CI === "true") {
  process.exit(0);
}
const husky = (await import("husky")).default;
console.log(husky());
