export default interface ConfigSchema {
  appName: string;
  appVersion: string;
  apiVersion: string;
  tos: {
    text: string;
    version: string;
  };
  awtterSdk?: {
    version: string;
    path: string;
  }
  awtterMerger?: {
    version: string;
    path: string;
  }
}
