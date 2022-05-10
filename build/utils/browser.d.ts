export interface BrowserSpec {
    name: string;
    version: string;
}
export declare const get_browser: () => BrowserSpec;
export declare const is_browser_supported: (supported_browser_names: string[]) => boolean;
