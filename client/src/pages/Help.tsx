import { HelpCircle, Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Help() {
  return (
    <Card className="border-cyan-500 bg-black">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyan-500">
          <HelpCircle className="h-6 w-6" />
          Help & Support
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-invert">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-cyan-500">How to Use the Calculator</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Enter the amount of gems you want to calculate interest for</li>
              <li>The calculator will automatically show interest for:</li>
              <ul className="list-disc list-inside ml-6">
                <li>1 day (0.15% interest)</li>
                <li>7 days (7 × 0.15% interest)</li>
                <li>30 days (30 × 0.15% interest)</li>
              </ul>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-500">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-cyan-500">How is the interest calculated?</h3>
                <p>Interest is calculated at a fixed rate of 0.15% per day on the principal amount.</p>
              </div>
              <div>
                <h3 className="font-semibold text-cyan-500">Is this an official EXP calculator?</h3>
                <p>No, this is a fan-made calculator and is not officially affiliated with EXP.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-500">Contact Support</h2>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="h-5 w-5 text-cyan-500" />
              <a href="mailto:ExpCalculator@gmail.com" className="text-cyan-500 hover:text-cyan-400">
                ExpCalculator@gmail.com
              </a>
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
}
