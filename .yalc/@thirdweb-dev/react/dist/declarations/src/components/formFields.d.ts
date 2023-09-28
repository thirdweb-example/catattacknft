/// <reference types="react" />
export declare const FormFieldWithIconButton: React.FC<{
    name: string;
    id: string;
    autocomplete: string;
    right: {
        icon: React.ReactNode;
        onClick: () => void;
    };
    value: string;
    required?: boolean;
    type: "text" | "password";
    onChange: (value: string) => void;
    label: string;
    error?: string;
    noSave?: boolean;
    dataTest?: string;
    placeholder?: string;
}>;
export declare const FormField: React.FC<{
    name: string;
    id: string;
    autocomplete: string;
    value: string;
    required?: boolean;
    type: "text" | "password";
    onChange: (value: string) => void;
    label: string;
    placeholder?: string;
    errorMessage?: React.ReactNode;
    disabled?: boolean;
}>;
//# sourceMappingURL=formFields.d.ts.map