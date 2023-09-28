import { IpfsUploadBatchOptions, UploadOptions } from "@thirdweb-dev/storage";
interface StorageUploadOptions<T extends UploadOptions> {
    data: unknown[];
    options?: T;
}
/**
 * Hook used to upload any files or JSON data to decentralized storage systems like IPFS,
 * using the `storageInterface` configured on the `ThirdwebProvider`
 *
 * @param options - Configure the options for your upload
 * @returns Function used to upload files or JSON to decentralized storage systems
 *
 * @example
 * ```jsx
 * import { useStorageUpload } from "@thirdweb-dev/react";
 *
 * export default function Component() {
 *   const { mutateAsync: upload, isLoading } = useStorageUpload();
 *
 *   async function uploadData() {
 *     const filesToUpload = [...];
 *     const uris = await upload({ data: files });
 *     console.log(uris);
 *   }
 *
 *   return (
 *     <button onClick={uploadData}>
 *       Upload
 *     </button>
 *   )
 * }
 * ```
 * @see {@link https://portal.thirdweb.com/react/react.usestorageupload?utm_source=sdk | Documentation}
 */
export declare function useStorageUpload<T extends UploadOptions = IpfsUploadBatchOptions>(uploadOptions?: T): import("@tanstack/react-query").UseMutationResult<string[], unknown, StorageUploadOptions<T>, unknown>;
export {};
//# sourceMappingURL=useStorageUpload.d.ts.map