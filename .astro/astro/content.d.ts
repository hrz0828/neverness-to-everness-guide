declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"characters": {
"anhunqu.mdx": {
	id: "anhunqu.mdx";
  slug: "anhunqu";
  body: string;
  collection: "characters";
  data: InferEntrySchema<"characters">
} & { render(): Render[".mdx"] };
"baicang.mdx": {
	id: "baicang.mdx";
  slug: "baicang";
  body: string;
  collection: "characters";
  data: InferEntrySchema<"characters">
} & { render(): Render[".mdx"] };
"fadiya.mdx": {
	id: "fadiya.mdx";
  slug: "fadiya";
  body: string;
  collection: "characters";
  data: InferEntrySchema<"characters">
} & { render(): Render[".mdx"] };
"hasuoer.mdx": {
	id: "hasuoer.mdx";
  slug: "hasuoer";
  body: string;
  collection: "characters";
  data: InferEntrySchema<"characters">
} & { render(): Render[".mdx"] };
"jiuyuan.mdx": {
	id: "jiuyuan.mdx";
  slug: "jiuyuan";
  body: string;
  collection: "characters";
  data: InferEntrySchema<"characters">
} & { render(): Render[".mdx"] };
"mint.mdx": {
	id: "mint.mdx";
  slug: "mint";
  body: string;
  collection: "characters";
  data: InferEntrySchema<"characters">
} & { render(): Render[".mdx"] };
"nanally.mdx": {
	id: "nanally.mdx";
  slug: "nanally";
  body: string;
  collection: "characters";
  data: InferEntrySchema<"characters">
} & { render(): Render[".mdx"] };
"xiaozhi.mdx": {
	id: "xiaozhi.mdx";
  slug: "xiaozhi";
  body: string;
  collection: "characters";
  data: InferEntrySchema<"characters">
} & { render(): Render[".mdx"] };
"xun.mdx": {
	id: "xun.mdx";
  slug: "xun";
  body: string;
  collection: "characters";
  data: InferEntrySchema<"characters">
} & { render(): Render[".mdx"] };
};
"guides": {
"anomaly-commission-checklist.mdx": {
	id: "anomaly-commission-checklist.mdx";
  slug: "anomaly-commission-checklist";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"banner-analysis-framework.mdx": {
	id: "banner-analysis-framework.mdx";
  slug: "banner-analysis-framework";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"beginner.mdx": {
	id: "beginner.mdx";
  slug: "beginner";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"boss-combat-guide.mdx": {
	id: "boss-combat-guide.mdx";
  slug: "boss-combat-guide";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"character-tier-list.mdx": {
	id: "character-tier-list.mdx";
  slug: "character-tier-list";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"daily-weekly-priority.mdx": {
	id: "daily-weekly-priority.mdx";
  slug: "daily-weekly-priority";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"exploration-checklist.mdx": {
	id: "exploration-checklist.mdx";
  slug: "exploration-checklist";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"faq.mdx": {
	id: "faq.mdx";
  slug: "faq";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"first-30-days-route.mdx": {
	id: "first-30-days-route.mdx";
  slug: "first-30-days-route";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"gacha-budget.mdx": {
	id: "gacha-budget.mdx";
  slug: "gacha-budget";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"growth-material-route.mdx": {
	id: "growth-material-route.mdx";
  slug: "growth-material-route";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"systems-overview.mdx": {
	id: "systems-overview.mdx";
  slug: "systems-overview";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"team-building.mdx": {
	id: "team-building.mdx";
  slug: "team-building";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"team-comps.mdx": {
	id: "team-comps.mdx";
  slug: "team-comps";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"version-review-checklist.mdx": {
	id: "version-review-checklist.mdx";
  slug: "version-review-checklist";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
};
"maps": {
"bridge-crossings.mdx": {
	id: "bridge-crossings.mdx";
  slug: "bridge-crossings";
  body: string;
  collection: "maps";
  data: InferEntrySchema<"maps">
} & { render(): Render[".mdx"] };
"district-a.mdx": {
	id: "district-a.mdx";
  slug: "district-a";
  body: string;
  collection: "maps";
  data: InferEntrySchema<"maps">
} & { render(): Render[".mdx"] };
"ekorai-town.mdx": {
	id: "ekorai-town.mdx";
  slug: "ekorai-town";
  body: string;
  collection: "maps";
  data: InferEntrySchema<"maps">
} & { render(): Render[".mdx"] };
"new-herland.mdx": {
	id: "new-herland.mdx";
  slug: "new-herland";
  body: string;
  collection: "maps";
  data: InferEntrySchema<"maps">
} & { render(): Render[".mdx"] };
"skytower-route.mdx": {
	id: "skytower-route.mdx";
  slug: "skytower-route";
  body: string;
  collection: "maps";
  data: InferEntrySchema<"maps">
} & { render(): Render[".mdx"] };
};
"updates": {
"v0-1-0.mdx": {
	id: "v0-1-0.mdx";
  slug: "v0-1-0";
  body: string;
  collection: "updates";
  data: InferEntrySchema<"updates">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
