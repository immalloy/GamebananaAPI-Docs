import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function ApiExplorerPage() {
  const scriptUrl = useBaseUrl("/vendor/rapidoc-min.js");
  const specUrl = useBaseUrl("/openapi.yaml");

  useEffect(() => {
    if (typeof window === "undefined" || window.customElements?.get("rapi-doc")) {
      return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [scriptUrl]);

  return (
    <Layout
      title="API Explorer"
      description="Searchable GameBanana API explorer powered by the OpenAPI spec in this repo."
    >
      <Head>
        <meta
          name="description"
          content="Search endpoints, inspect schemas, and browse the unofficial GameBanana API."
        />
      </Head>
      <main className="api-explorer-page">
        <section className="api-explorer-hero">
          <p className="api-explorer-eyebrow">GameBanana API</p>
          <h1>API Explorer</h1>
          <p>
            Search endpoints, inspect parameters, and browse the repo&apos;s OpenAPI
            document without the old Swagger UI shell.
          </p>
        </section>
        <section className="api-explorer-frame">
          <rapi-doc
            spec-url={specUrl}
            theme="light"
            render-style="focused"
            show-header="false"
            allow-search="true"
            allow-server-selection="true"
            allow-authentication="true"
            persist-auth="true"
            sort-tags="true"
            sort-endpoints-by="path"
            nav-item-spacing="compact"
            regular-font="Trebuchet MS, Segoe UI, Tahoma, sans-serif"
            mono-font="Consolas, Monaco, monospace"
            primary-color="#b47c07"
            bg-color="#fffef7"
            text-color="#3a2a08"
            header-color="#fff5d1"
            nav-bg-color="#fff9e8"
            nav-text-color="#5c4306"
            nav-hover-bg-color="#f6deb0"
            nav-hover-text-color="#3a2a08"
            nav-accent-color="#d29108"
            schema-style="tree"
            show-method-in-nav-bar="as-colored-block"
            use-path-in-nav-bar="true"
            fill-request-fields-with-example="true"
          />
        </section>
      </main>
    </Layout>
  );
}
