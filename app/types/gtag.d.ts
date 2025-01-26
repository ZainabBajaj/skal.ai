interface GtagConfig {
  page_path?: string;
  page_title?: string;
  page_location?: string;
  send_page_view?: boolean;
  [key: string]: string | boolean | undefined;
}

interface Window {
  gtag: (
    command: "config" | "event" | "js",
    targetId: string,
    config?: GtagConfig
  ) => void;
  dataLayer: Array<{
    [key: string]: string | boolean | number | object | undefined;
  }>;
} 