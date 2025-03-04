import { ScrollText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Rules() {
  return (
    <Card className="border-cyan-500 bg-black">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyan-500">
          <ScrollText className="h-6 w-6" />
          Rules & Guidelines
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-invert">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Calculator Usage</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Enter only numeric values in the calculator</li>
              <li>The minimum amount for calculation is 1 gem</li>
              <li>Results are rounded to 2 decimal places</li>
              <li>Interest rate is fixed at 0.15% per day</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Important Notes</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>This calculator is for estimation purposes only</li>
              <li>Actual returns may vary from calculated values</li>
              <li>The calculator does not guarantee future returns</li>
              <li>Always verify calculations with official sources</li>
            </ul>
          </section>
        </div>
      </CardContent>
    </Card>
  );
}
