// apps/resume/src/_content/_loader/json.d.ts
declare module "*.json" {
  const value: unknown; // any 대신 unknown으로 안전하게
  export default value;
}
