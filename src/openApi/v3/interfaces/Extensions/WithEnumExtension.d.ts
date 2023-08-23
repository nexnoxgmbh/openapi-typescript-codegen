export interface WithEnumExtension extends WithMsEnumExtension {
    'x-enum-varnames'?: string[];
    'x-enum-descriptions'?: string[];
}

export interface WithMsEnumExtension {
    'x-ms-enum'?: { values: { name: string; value: string; }[] };
}
