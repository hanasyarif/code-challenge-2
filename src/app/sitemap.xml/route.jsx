import Sitemap from "@/core/utils/sitemap/sitemap.json";
const URL = process.env.NEXT_PUBLIC_SITE_URL;

const generateSiteMap = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     ${Sitemap.data.map((item) => {
       return `
        <url>
        <loc>${URL}${item.url}</loc>
        </url> 
        `;
     })}
   </urlset>
 `;
};

export function GET() {
  const body = generateSiteMap();

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
