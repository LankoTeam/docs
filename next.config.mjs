import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'dists',
  reactStrictMode: true,
};

export default withMDX(config);
