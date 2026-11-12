# When a Data Source Is Down: A Capstone Recovery Plan

[Capstone home](README.md) · [Finding data](02_finding_data.md) · [Last-minute tips](13_last_minute_tips.md)

**A website outage does not have to stop your capstone.** It is evidence of a real research constraint. Your job is to find a defensible path to a small, reproducible result—not to keep retrying the same broken request.

## First: diagnose, document, and protect your work

1. **Identify the actual failure.** Is the service unavailable, is your URL or API request wrong, has its format changed, or are you being rate-limited? Check the provider's official status page or documentation before guessing.
2. **Record the evidence.** Note the date, service, endpoint, error or status message, and what you tried. Keep a short screenshot or log without exposing secrets.
3. **Locate a mirror, official download, or alternate archive.** A mirror of the *same* database is usually preferable to a completely different dataset. If you switch datasets, verify that the required variables and definitions still match.
4. **Save a permitted, dated snapshot.** Once the data can be downloaded, keep a small CSV or other allowed copy so your analysis does not depend on a live service during the presentation. Cite its source and acquisition date. Respect licenses and redistribution restrictions.
5. **Narrow the question if necessary.** A carefully analyzed subset is better than a large dataset you cannot access, verify, or explain.

**Do not manufacture or silently replace missing scientific observations.** Missing data, a failed request, and a measured value of zero mean different things.

## November 2026 example: SIMBAD and the CDS disruption

**Status checked November 12, 2026; check again before using these links.** The [Centre de Données astronomiques de Strasbourg (CDS) service notice](https://cds.unistra.fr/) says a cybersecurity incident has degraded access to SIMBAD, VizieR, and other Strasbourg-hosted services. It lists official temporary mirrors.

| If you need... | Try this source | Important distinction |
|---|---|---|
| **SIMBAD object identification, names, coordinates, and object types** | [SIMBAD at CfA/Harvard](https://simbad.cfa.harvard.edu/simbad/) or [SIMBAD at IDIA](https://simbad.idia.ac.za/) | These are SIMBAD mirrors: try them before redesigning the project. The CfA mirror's data are reported as ingested through **October 14, 2026**. |
| **SIMBAD TAP/programmatic queries** | [CfA SIMBAD TAP](https://simbad.cfa.harvard.edu/simbad/sim-tap/) or [IDIA SIMBAD TAP](https://simbad.idia.ac.za/simbad/sim-tap/) | Record which mirror you use and verify the fields returned. |
| **Published astronomical catalogs** | [VizieR at CfA](https://vizier.cfa.harvard.edu/viz-bin/VizieR) or [VizieR at IDIA](https://vizier.idia.ac.za/viz-bin/VizieR) | Choose a specific catalog, read its documentation, and check units. Some large catalogs are not present on every mirror. |
| **Star positions, brightness, parallax, and proper motion** | [ESA Gaia Archive](https://gea.esac.esa.int/archive/) | Gaia is not a drop-in replacement for SIMBAD's object classification; first check that your question matches Gaia's fields. |
| **Space-telescope observations and selected catalogs** | [NASA MAST](https://mast.stsci.edu/) and [astroquery MAST documentation](https://astroquery.readthedocs.io/en/latest/mast/mast.html) | MAST is especially useful for mission observations and associated products, not necessarily the same SIMBAD fields. |
| **Confirmed exoplanets and planetary-system parameters** | [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/) and [TAP instructions](https://exoplanetarchive.ipac.caltech.edu/docs/TAP/usingTAP.html) | Useful for exoplanet questions; not a general replacement for a stellar-object catalog. |

**Important deadline warning:** ESA has announced that the **Gaia Archive is scheduled to be unavailable November 25–December 2, 2026**, during preparations for Gaia DR4. This overlaps the **December 2 capstone deadline**. If your project uses Gaia, obtain the necessary permitted data and documentation *before November 25*. Check [ESA's Gaia news](https://www.cosmos.esa.int/web/gaia/news) for schedule changes.

### Small Python example: use a SIMBAD mirror

If your existing code uses `astroquery.simbad`, the CDS notice documents selecting a mirror. Install the package in your own environment if needed (`python -m pip install astroquery`). This snippet requires an active connection to the mirror:

```python
from astroquery.simbad import Simbad

simbad = Simbad()
simbad.server = "simbad.cfa.harvard.edu"
result = simbad.query_object("Vega")

if result is None or len(result) == 0:
    print("No matching result; check the name and service.")
else:
    print(result)
```

The mirror setting applies to this `Simbad` instance. A server being reachable does not guarantee every query or field will work: inspect the actual output and use a small test query first. For VizieR, the CDS notice also documents `Vizier(vizier_server="vizier.cfa.harvard.edu")`.

**Beginner-friendly alternative:** use the archive's website to export a **small CSV** rather than building a complex live API workflow. Then analyze the saved file with pandas. Document the download procedure and the date.

## A research question you can still answer

Suppose your original plan was “compare kinds of astronomical objects using SIMBAD.” Try these decisions in order:

1. **Same source, new server:** query a SIMBAD mirror and verify that it returns the same fields needed for the comparison.
2. **Smaller sample:** analyze a documented selection of objects or a specific catalog; do not present a convenience sample as a random sample of the entire sky.
3. **Different data and revised question:** if you move to Gaia, consider a question about brightness or parallax instead of claiming it provides SIMBAD's classifications.
4. **If data cannot be recovered:** clearly explain the blocked source, the evidence, your attempted alternatives, and what narrower question your *available* data can support.

For astronomy, a common issue is **selection bias**: different instruments, surveys, sky regions, sensitivity thresholds, and quality filters can produce different observed populations. A correlation or group difference in the catalog is not automatically a universal physical law.

## Show genuine progress in the report and presentation

Use this short research-log format:

> **Question:** What were we trying to learn?  
> **Attempt:** Which archive or request did we use?  
> **Evidence:** What response, field list, data sample, or error did we actually observe?  
> **Decision:** Did we change mirrors, switch archives, narrow our sample, or revise the question?  
> **Next result:** What is the smallest table, count, graph, or calculation we can produce now?

For **Update 2 and the final paper**, identify the change from your earlier plan and justify it with evidence. For the **presentation**, focus on the best working analysis and a check supporting it. Briefly mention an outage only if it explains an important decision.

**Minimum viable recovery goal:** one documented source, one accessible dataset or sample, one Python-generated result, one independent check, and one honest limitation.

[Review the Update 2 checkpoint](14_update_2.md) · [Prepare the final report](08_final_report.md) · [Final submission checklist](12_final_checklist.md)
