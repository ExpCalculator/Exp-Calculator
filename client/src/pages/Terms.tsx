import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <Card className="border-cyan-500 bg-black">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyan-500">
          <FileText className="h-6 w-6" />
          Terms of Service
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-invert">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Acceptance of Terms</h2>
            <p>
              By accessing and using this calculator, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Use License</h2>
            <p>
              This calculator is provided for personal use only. The calculations are estimates and
              should not be considered financial advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Disclaimer</h2>
            <p>
              This is a fan-made calculator and is not officially affiliated with EXP. All calculations
              are provided "as is" without warranty of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Please check this page
              periodically for changes.
            </p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
}
