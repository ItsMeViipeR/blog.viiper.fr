import { ArticlePreview } from "@/components/ArticlePreview";

export default async function Home() {
  return (
    <div className="flex justify-center items-center pt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <ArticlePreview
          title="Bootstrap vs Tailwind - Which one to chose?"
          description="In styling world for web development, there's two big CSS framework that are present, TailwindCSS and Bootstrap. We'll see which one to chose for your projects."
          img={{
            src: "https://imgs.search.brave.com/YpyY3du94ccxI4VV2sUHbD5UFnbMsB6B729qCvgonY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YXRhdHVzLmNvbS9i/bG9nL2NvbnRlbnQv/aW1hZ2VzL3NpemUv/dzk2MC8yMDIyLzA2/L1RhaWx3aW5kLUNT/Uy12cy4tQm9vdHN0/cmFwLmpwZWc",
            alt: "TailwindCSS x HTML",
          }}
        />
        <ArticlePreview
          title="How to use TypeScript with Next.js"
          description="TypeScript is a great tool for JavaScript developers. It helps you to write code with less errors and more confidence. Let's see how to use it with Next.js"
          img={{
            src: "https://imgs.search.brave.com/C8JNVewbpm_K8R-6Zl2b7n6d4vM44HI65CIkHOE6Oc4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTEvdXNpbmct/bmV4dC1qcy13aXRo/LXR5cGVzY3JpcHQu/cG5n",
            alt: "TypeScript x Next.js",
          }}
        />
        <ArticlePreview
          title="How to use TailwindCSS with Next.js"
          description="TailwindCSS is a great tool for styling your React applications. Let's see how to use it with Next.js"
          img={{
            src: "https://imgs.search.brave.com/bPU_rQMvtF-CM1sWRFG6apieuBJlDuvXVB1LLuQpqvU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9kaWVnb2Qzdi9i/NTMyZGRhNC1iYmJm/LTRjMDMtYmE0OS05/MWE0NTg3ZGI2ZDJf/bmV4dGpzdGFpbHdp/bmQucG5nP2F1dG89/Y29tcHJlc3MsZm9y/bWF0",
            alt: "TailwindCSS x Next.js",
          }}
        />
        <ArticlePreview
          title="Why you need to code on Linux?"
          description="Linux is a great operating system for developers. Let's see why you should use it."
          img={{
            src: "https://imgs.search.brave.com/pYCxrprFBiRoyqBhYQCOCVZ8fBV-UX-ljWNtiYPv1sY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGxpbGVhcm4u/Y29tL2ljZTkvZnJl/ZV9yZXNvdXJjZXNf/YXJ0aWNsZV90aHVt/Yi9CZWdpbm5lcnNf/R3VpZGVfdG9fTGlu/dXhfUHJvZ3JhbW1p/bmcuanBn",
            alt: "Linux",
          }}
        />
        <ArticlePreview
          title="Linux or Windows - Which one is better?"
          description="Linux and Windows are two big operating systems. Let's see which one is better for you."
          img={{
            src: "https://imgs.search.brave.com/yS1frzgeoTxDBEs9tFONc43eiL37xQVZbKnZI5SYLPE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5hbHl0aWNzaW5z/aWdodC5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDEv/TGludXgtdnMtV2lu/ZG93cy1XaGljaC1P/cGVyYXRpbmctU3lz/dGVtLWlzLXRoZS1C/ZXN0LmpwZw",
            alt: "Linux vs Windows",
          }}
        />
      </div>
    </div>
  );
}
