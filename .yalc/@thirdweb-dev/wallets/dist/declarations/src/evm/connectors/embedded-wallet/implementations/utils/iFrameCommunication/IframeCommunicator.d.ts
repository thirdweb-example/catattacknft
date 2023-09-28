import type { StyleObject } from "@paperxyz/sdk-common-utilities";
type IFrameCommunicatorProps = {
    link: string;
    iframeId: string;
    container?: HTMLElement;
    iframeStyles?: StyleObject;
    onIframeInitialize?: () => void;
};
export declare class IframeCommunicator<T extends {
    [key: string]: any;
}> {
    private iframe;
    private POLLING_INTERVAL_SECONDS;
    private iframeBaseUrl;
    constructor({ link, iframeId, container, iframeStyles, onIframeInitialize, }: IFrameCommunicatorProps);
    protected onIframeLoadedInitVariables(): Promise<Record<string, any>>;
    onIframeLoadHandler(iframe: HTMLIFrameElement, onIframeInitialize?: () => void): () => Promise<void>;
    call<ReturnData>({ procedureName, params, showIframe, }: {
        procedureName: keyof T;
        params: T[keyof T];
        showIframe?: boolean;
    }): Promise<ReturnData>;
    /**
     * This has to be called by any iframe that will be removed from the DOM.
     * Use to make sure that we reset the global loaded state of the particular iframe.src
     */
    destroy(): void;
}
export {};
//# sourceMappingURL=IframeCommunicator.d.ts.map