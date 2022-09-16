# Plotly Landing Page Demo

A repo for Plotly landing page mockup reproduction.

## Notes

### UI framework

I used Next.js and Bootstrap 5 for the UI (as-is, without a wrapper library like React Bootstrap).

I went this route as given the timeframe, both React/Next and Chakra UI were new frameworks for me. I had to focus on learning/refreshing React/Next skills (coming from a Vue.js background), and it made more sense to use a UI/CSS framework I have experience with to cut down on time while still providing a quality reproduction of the mockup.

### Dark mode

For the dark mode feature, I chose to implement a single button instead of a dropdown.  While obviously a departure from the mockup,the thinking behind this is that it removes a step for the user to not have to click a dropdown, then select an option.

Additionally, the button changes state to reflect the mode that is NOT currently selected: i.e. If light mode is currently active, 'Dark' + the dark icon will show in the button.  This tends to follow common practice where the user is shown not what currently is active, but the available option that will change the UI.

I also made the dark mode select button the same purple as the form submit in an effort to create consistency in the UI.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
