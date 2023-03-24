export type DataLanguageResponse = Record<"lang_vi" | "lang_ja", string>[];
export type LanguageResponse = { success: boolean; message: string; data?: DataLanguageResponse };
