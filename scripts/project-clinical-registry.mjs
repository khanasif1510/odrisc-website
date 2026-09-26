import { readFileSync, writeFileSync } from "node:fs";
import { format, resolveConfig } from "prettier";
import { fileURLToPath } from "node:url";
// Keep the complete supplied governance record out of the client bundle.
const input = JSON.parse(
  readFileSync(
    new URL("../docs/clinical/reference/clinical-sources.json", import.meta.url),
    "utf8",
  ),
);
const projection = {
  registry: {
    id: input.registry.registry_id,
    version: input.registry.registry_version,
    generatedAt: input.registry.generated_at,
  },
  summary: input.promotion_summary,
  sources: input.sources.map((s) => ({
    id: s.source_id,
    title: s.title,
    body: s.issuing_body,
    version: s.version,
    publicationDate: s.publication_date,
    reaffirmedDate: s.reaffirmed_date,
    revisionDate: s.revision_date,
    correctionDate: s.correction_date,
    url: s.canonical_url,
    jurisdictions: s.jurisdictions,
    population: s.population,
    locator: s.source_locator,
    registryStatus: s.registry_status,
    clinicalReviewStatus: s.clinical_review_status,
    adoptionStatus: s.adoption_status,
    retrievalStatus: s.retrieval_status,
    contentStatus: s.content_package_status,
    lookupStatus: s.promotion.lookup.status,
    numericalStatus: s.promotion.numerical.status,
    lookupEnabled: s.promotion.lookup.release.enabled,
    numericalEnabled: s.promotion.numerical.release.enabled,
    restrictions: s.promotion.lookup.restrictions,
    blockers: s.promotion.lookup.blockers,
    correctedBy: s.corrected_by,
    supersededBy: s.superseded_by,
    relatedSources: s.related_sources,
    limitations: s.limitations,
    methodPackageStatus: s.method_package.package_status,
  })),
};
writeFileSync(
  new URL("../src/content/providers/clinical-source-metadata.json", import.meta.url),
  await format(JSON.stringify(projection), {
    ...(await resolveConfig(
      fileURLToPath(
        new URL("../src/content/providers/clinical-source-metadata.json", import.meta.url),
      ),
    )),
    parser: "json",
  }),
);
console.log(
  `Projected ${projection.sources.length} source metadata records; no approvals changed.`,
);
