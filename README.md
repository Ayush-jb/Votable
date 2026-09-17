# Votable - Restoring the Right to Vote

**Votable** is a civic-information web application designed around the Special Intensive Revision (SIR) electoral-roll appeal process in India. It helps voters check whether their EPIC ID is present in the SIR dataset and guides them through the preparation needed to appeal a wrongful exclusion.

Built for a Hackathon by **Team Coddify**.

## Features

- **Voter Search:** Instantly look up a voter by EPIC Number and Name to determine inclusion or exclusion status.
- **Dynamic Appeal Info:** Automatically identifies the correct Appellate Authority (District Election Officer) and tribunal address based on the voter's constituency.
- **Document Checklist:** Enforces mandatory legal documentation required for the appeal process based on real ECI guidelines.
- **Petition Generation:** Automatically generates a formatted, print-ready legal petition (under Section 24a of the RP Act, 1950) that can be submitted to the local tribunal.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo Data

This application currently runs on a mock dataset for demonstration purposes. Try testing the flow with the following credentials:

- **Included Voter:** EPIC `WBDEMO001`, Name `Arjun Sharma`
- **Excluded Voter:** EPIC `WBDEMO002`, Name `Priya Das`

*(Note: While the voter records are simulated, the tribunal locations, official designations, and document requirements are based on 100% real-world data.)*

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
