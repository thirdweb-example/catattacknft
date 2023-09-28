export interface UseClipboardOptions {
    /**
     * timeout delay (in ms) to switch back to initial state once copied.
     */
    timeout?: number;
    /**
     * Set the desired MIME type
     */
    format?: string;
}
/**
 * React hook to copy content to clipboard
 *
 */
export declare function useClipboard(text: string, optionsOrTimeout?: number | UseClipboardOptions): {
    value: string;
    onCopy: () => void;
    hasCopied: boolean;
};
//# sourceMappingURL=useCopyClipboard.d.ts.map