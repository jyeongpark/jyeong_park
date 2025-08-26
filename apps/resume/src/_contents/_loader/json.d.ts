declare module "*.json" {
  const value: unknown; // any 대신 unknown으로 안전하게
  export default value;
}
