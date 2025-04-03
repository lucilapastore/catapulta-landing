import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import blog_1 from "../public/blog/blog_1.png";
import blog_2 from "../public/blog/blog_2.png";
import blog_3 from "../public/blog/blog_3.png";
import { Button } from "./ui/button";

interface BlogPost {
  title: string;
  description: string;
  category: string;
  readTime: string;
  imageUrl: string;
  href: string;
  openInNewTab?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    title: "How to deploy a contract in Foundry using Catapulta?",
    description:
      "Deploying smart contracts is a crucial step in bringing your decentralized applications (dApps...",
    category: "Category",
    readTime: "5 min read",
    imageUrl: blog_1.src,
    href: "",
  },
  {
    title: "What is a ZK Rollup?",
    description:
      "Blockchain technology, while revolutionary, faces a critical challenge: scalability. As networks like...",
    category: "Category",
    readTime: "10 min read",
    imageUrl: blog_2.src,
    href: "",
  },
  {
    title: "9 Tips to Transition from Cybersecurity to Blockchain",
    description:
      "In an era where digital assets and decentralized systems dominate industries, blockchain securi...",
    category: "Category",
    readTime: "3 min read",
    imageUrl: blog_3.src,
    href: "",
    openInNewTab: true,
  },
];
export default function Blog() {
  return (
    <section className="container place-items-center bg-background/80 grid flex-col justify-center items-center py-4 px-4 md:px-16 mx-auto rounded-lg md:mt-8">
      <div className="text-center mb-16">
        <p className="text-primary mb-4">Blog</p>
        <h2 className="text-4xl font-bold mb-4 tracking-tight lg:text-5xl">
          Learning blockchain
          <br />
          <span className="text-primary text-4xl font-bold mb-4 tracking-tight lg:text-5xl">
            programming
          </span>
        </h2>

        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Button variant="outline">View All</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="group bg-background/80 rounded-3xl transition-transform hover:-translate-y-1 flex flex-col h-full"
          >
            <Link
              href={post.href}
              target={post.openInNewTab ? "_blank" : undefined}
              className="flex flex-col h-full"
            >
              <CardHeader className="relative aspect-[1.8/1] m-6">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover rounded-3xl"
                />
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <div className="flex items-center gap-4 mb-4 flex-1">
                  <Button variant="secondary">{post.category}</Button>

                  <span className="text-muted hover:text-primary/90 text-sm">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{post.title}</h3>

                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>

              <CardFooter className="justify-end mt-auto">
                <div className="flex items-center text-sm font-medium group-hover:text-primary/90">
                  Read more
                  <ChevronRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
