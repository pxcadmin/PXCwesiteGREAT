import { z } from "zod";

// Frontend-only schema stub. Forms are placecards bound to GHL workflows.
export const insertContactSubmissionSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  practiceName: z.string().optional(),
  role: z.string().optional(),
  message: z.string().min(1, "Tell us a bit about your practice"),
  preferredContact: z.string().optional(),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;

export const insertBlogPostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  category: z.string(),
  author: z.string().default("Jennifer Radu"),
  featuredImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = InsertBlogPost & { id: string; publishedDate: string };

export const insertProductSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  image: z.string().optional(),
  features: z.array(z.string()).optional(),
  popular: z.boolean().optional(),
  duration: z.string().optional(),
});
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = InsertProduct & { id: string };
