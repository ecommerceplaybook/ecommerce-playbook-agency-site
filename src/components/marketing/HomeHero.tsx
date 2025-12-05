import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function HomeHero() {
  return (
    <Section className="pt-32 md:pt-40 pb-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-block mb-4 rounded-full p-[2px]" style={{ background: 'linear-gradient(90deg, hsla(160, 50%, 51%, 1) 0%, hsla(247, 60%, 21%, 1) 100%)' }}>
          <p className="inline-block text-xs font-semibold text-black rounded-full px-4 py-1.5 bg-white">
            Shopify eCommerce Agency
          </p>
        </div>
        <h1 className="text-4xl font-medium leading-[0.9] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6">
          We design world-class
          <br />
          websites and the products
          <br />
          that power them
        </h1>
        <p className="text-lg text-slate-600 md:text-xl mb-8 max-w-2xl mx-auto">
          High growth teams like yours rely on Finsweet to maximize
          their most valuable marketing asset - their website.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            href="/contact" 
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-black border-none rounded-md"
          >
            Expert Services →
          </Button>
          <Button 
            href="/shop" 
            variant="secondary" 
            size="lg"
            className="border-black text-black hover:bg-gray-100 rounded-md"
          >
            Products →
          </Button>
        </div>
      </div>
    </Section>
  );
}


