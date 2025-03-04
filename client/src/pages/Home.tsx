import InterestCalculator from "@/components/calculator/InterestCalculator";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Alert className="bg-cyan-500/10 border-cyan-500">
        <AlertCircle className="h-4 w-4 text-cyan-500" />
        <AlertDescription>
          This is a fan-made calculator and is not officially affiliated with EXP.
        </AlertDescription>
      </Alert>
      
      <InterestCalculator />
    </div>
  );
}
