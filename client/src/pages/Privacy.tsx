import { Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <Card className="border-cyan-500 bg-black">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyan-500">
          <Shield className="h-6 w-6" />
          Privacy Policy
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-invert">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Information Collection</h2>
            <p>
              This calculator does not collect or store any personal information. All calculations
              are performed locally in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Usage Data</h2>
            <p>
              We do not track or collect any usage data or analytics about how you use the calculator.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:ExpCalculator@gmail.com" className="text-cyan-500 hover:text-cyan-400">
                ExpCalculator@gmail.com
              </a>
            </p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
}
