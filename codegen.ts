import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "http://localhost:4000/graphql",
	generates: {
		"./src/graphql/__generated__/graphql.ts": {
			plugins: ["typescript", "typescript-resolvers"],
			config: {
				useIndexSignature: true,
				contextType: "../../../index#Context",
			},
		},
	},
};

export default config;
