export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export interface BuildOptions {
  paths: BuildPaths;
  port: number;
  mode: BuildMode;
  bundleAnalyze?: boolean;
}
