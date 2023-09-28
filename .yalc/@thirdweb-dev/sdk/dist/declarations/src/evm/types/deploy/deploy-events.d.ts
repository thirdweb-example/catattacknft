export interface DeployEvent {
    status: "submitted" | "completed";
    transactionHash: string;
    contractAddress?: string;
}
export interface DeployEvents {
    contractDeployed: [DeployEvent];
}
//# sourceMappingURL=deploy-events.d.ts.map