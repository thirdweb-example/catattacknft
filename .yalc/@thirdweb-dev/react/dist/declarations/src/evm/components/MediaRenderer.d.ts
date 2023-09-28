import React from "react";
import type { MediaRendererProps } from "./types";
/**
 * This component can be used to render any media type, including image, audio, video, and html files.
 * Its convenient for rendering NFT media files, as these can be a variety of different types.
 * The component falls back to a external link if the media type is not supported.
 * The default size is 300px by 300px, but this can be changed using the `width` and `height` props.
 *
 * Props: {@link MediaRendererProps}
 *
 * @example
 * We can take a video file hosted on IPFS and render it using this component as follows
 * ```jsx
 * const Component = () => {
 *   return <MediaRenderer
 *     src="ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
 *     alt="A mp4 video"
 *   />
 * }
 * ```
 *
 * You can try switching out the `src` prop to different types of URLs and media types to explore the possibilities.
 */
export declare const MediaRenderer: React.ForwardRefExoticComponent<MediaRendererProps & React.RefAttributes<HTMLMediaElement>>;
export interface MediaType {
    url?: string;
    mimeType?: string;
}
/**
 * @param uri - the uri to resolve (can be a url or a ipfs://\<cid\>)
 * @returns the fully resolved url + mime type of the media
 *
 * @example
 * Usage with fully formed url:
 * ```jsx
 * const Component = () => {
 *   const resolved = useResolvedMediaType("https://example.com/video.mp4");
 *   console.log("mime type", resolved.data.mimeType);
 *   console.log("url", resolved.data.url);
 *   return null;
 * }
 * ```
 *
 * Usage with ipfs cid:
 * ```jsx
 * const Component = () => {
 *   const resolved = useResolvedMediaType("ipfs://QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvsd");
 *   console.log("mime type", resolved.data.mimeType);
 *   console.log("url", resolved.data.url);
 *   return null;
 * }
 * ```
 */
export declare function useResolvedMediaType(uri?: string, mimeType?: string, gatewayUrl?: string): {
    url: string;
    mimeType: string | undefined;
};
//# sourceMappingURL=MediaRenderer.d.ts.map