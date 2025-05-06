import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const metadata = {
  title: "お問合せ",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Hero title="Contact" sub="お問合せ" />
            <Sheet>{children}</Sheet>
        </>
    ); 
}