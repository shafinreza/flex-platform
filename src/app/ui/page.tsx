import FlexButton from "@/components/ui/FlexButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function UIPage() {
  return (
    <main className="min-h-screen bg-[#EFDFC7] px-8 py-16">
      <div className="mx-auto max-w-7xl">

        <Badge className="mb-6 bg-[#EF6838] text-white">
          FLEX DESIGN SYSTEM
        </Badge>

        <h1 className="mb-3 text-6xl font-black text-[#0B864E]">
          FLEX UI
        </h1>

        <p className="mb-12 max-w-2xl text-xl text-[#4C260F]">
          Building the UK's best direct-to-consumer peanut butter experience.
        </p>

        {/* BUTTONS */}

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-black text-[#4C260F]">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-4">
            <FlexButton>
              Shop Now
            </FlexButton>

            <FlexButton variant="outline">
              See Recipes
            </FlexButton>

            <FlexButton variant="secondary">
              Best Value
            </FlexButton>
          </div>
        </section>

        {/* PRODUCT CARDS */}

        <section>

          <h2 className="mb-6 text-3xl font-black text-[#4C260F]">
            Product Cards
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            <Card className="rounded-[28px] border-2 border-[#4C260F] bg-white shadow-[8px_8px_0_#4C260F]">

              <CardContent className="p-8">

                <Badge className="mb-5 bg-[#0B864E] text-white">
                  Single Jar
                </Badge>

                <h3 className="mb-3 text-4xl font-black">
                  FLEX Smooth 510g
                </h3>

                <p className="mb-6">
                  High Protein • No Added Sugar • No Palm Oil
                </p>

                <div className="text-5xl font-black text-[#0B864E]">
                  £5.49
                </div>

              </CardContent>

            </Card>

            <Card className="rounded-[28px] border-2 border-[#4C260F] bg-[#EFB236] shadow-[8px_8px_0_#4C260F]">

              <CardContent className="p-8">

                <Badge className="mb-5 bg-[#EF6838] text-white">
                  BEST VALUE
                </Badge>

                <h3 className="mb-3 text-4xl font-black">
                  Pack of 6
                </h3>

                <p className="mb-6">
                  Save £7.95 compared with buying individual jars.
                </p>

                <div className="text-5xl font-black text-[#4C260F]">
                  £24.99
                </div>

              </CardContent>

            </Card>

          </div>

        </section>

      </div>
    </main>
  );
}