import "@/styles/globals.css";

export const metadata = {
  title: "Vidya Naik Wellness | Transform From Within",
  description:
    "Empowering women to transform from the inside out. Break free from limiting beliefs, unlock your charisma, and live the life you truly deserve.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
