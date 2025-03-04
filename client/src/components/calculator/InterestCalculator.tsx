import { useState } from "react";
import { Calculator } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DAILY_RATE = 0.0015; // 0.15%

export default function InterestCalculator() {
  const [amount, setAmount] = useState("");

  const calculateInterest = (days: number): string => {
    if (!amount || isNaN(Number(amount))) return "0.00";
    const principal = parseFloat(amount);
    const interest = principal * DAILY_RATE * days;
    return interest.toFixed(2);
  };

  return (
    <Card className="border-cyan-500 bg-black">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyan-500">
          <Calculator className="h-6 w-6" />
          Interest Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-cyan-500">
              Enter Gem Amount
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="border-cyan-500 bg-black text-white"
            />
          </div>

          <div className="grid gap-4">
            <div className="p-4 rounded-lg border border-cyan-500/50">
              <div className="text-sm text-cyan-500">1 Day Interest</div>
              <div className="text-2xl font-bold">{calculateInterest(1)} gems</div>
            </div>

            <div className="p-4 rounded-lg border border-cyan-500/50">
              <div className="text-sm text-cyan-500">7 Days Interest</div>
              <div className="text-2xl font-bold">{calculateInterest(7)} gems</div>
            </div>

            <div className="p-4 rounded-lg border border-cyan-500/50">
              <div className="text-sm text-cyan-500">30 Days Interest</div>
              <div className="text-2xl font-bold">{calculateInterest(30)} gems</div>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            *Interest is calculated at a rate of 0.15% per day
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
