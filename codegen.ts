import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "http://localhost:4000",
	generates: {
		"src/generated/graphql.ts": {
			plugins: ["typescript", "typescript-resolvers"],
			config: {
				useIndexSignature: true,
				contextType: "../../index#Context",
			},
		},
	},
};

export default config;
