import { z } from "zod";

const storageConfigSchema = z.object({
	driver: z.enum(["local", "s3", "supabase"]).default("local"),
	uploadDir: z.string().default("uploads"),
});

export type StorageConfig = z.infer<typeof storageConfigSchema>;

export function resolveStorageConfig(input: Partial<StorageConfig> = {}) {
	return storageConfigSchema.parse(input);
}

export function resolveUploadPath(
	fileName: string,
	input: Partial<StorageConfig> = {},
) {
	const config = resolveStorageConfig(input);

	return `${config.uploadDir}/${fileName}`;
}
