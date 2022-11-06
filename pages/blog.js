import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BlogCard from "@/components/blog-card";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  const getBlogs = async () => {
    try {
      const BLOG_URL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bymustfa";
      const res = await fetch(BLOG_URL);
      const data = await res.json();
      if (data.status === "ok") {
        setPosts(data.items);
      }
    } catch (error) {
      setPosts([]);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Layout>
      <div className="blog">
        {posts.map((item, index) => (
          <BlogCard key={index} item={item} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
