import Provider from "../Providers/provider";
import Header from "../Components/Header";
import "./globals.css";
import { EventSyncProvider } from "@/Providers/EventSyncProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <EventSyncProvider />
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
