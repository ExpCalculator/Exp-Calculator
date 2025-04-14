import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DAILY_RATE = 0.0015; // 0.15%

export default function InterestCalculator() {
  const [amount, setAmount] = useState("");

  const calculateCompoundInterest = (days: number, principal: number) => {
    // Calculate compound interest over the specified days
    // Formula: P * (1 + r)^n for total amount
    // P = principal, r = rate per period, n = number of periods
    const newTotal = principal * Math.pow(1 + DAILY_RATE, days);
    const interestOnly = newTotal - principal;
    
    return {
      interest: interestOnly.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }),
      total: newTotal.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    };
  };

  // Calculate all interest values at once
  const results = useMemo(() => {
    if (!amount || isNaN(Number(amount))) {
      return {
        day1: { interest: "0", total: "0" },
        day7: { interest: "0", total: "0" },
        day30: { interest: "0", total: "0" }
      };
    }
    
    const principal = parseFloat(amount);
    return {
      day1: calculateCompoundInterest(1, principal),
      day7: calculateCompoundInterest(7, principal),
      day30: calculateCompoundInterest(30, principal)
    };
  }, [amount]);

  const formatAmount = (value: string) => {
    // Remove existing commas first
    const plainNumber = value.replace(/,/g, '');
    if (!plainNumber || isNaN(Number(plainNumber))) return "";
    return Number(plainNumber).toLocaleString('en-US');
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
              type="text"
              value={formatAmount(amount)}
              onChange={(e) => setAmount(e.target.value.replace(/,/g, ''))}
              placeholder="Enter amount"
              className="border-cyan-500 bg-black text-white"
            />
          </div>

          <div className="grid gap-4">
            <div className="p-4 rounded-lg border border-cyan-500 bg-black">
              <div className="text-sm font-medium text-cyan-400">1 Day Interest</div>
              <div className="text-xl font-bold text-white">
                Interest: <span className="text-cyan-300">{results.day1.interest}</span> gems
              </div>
              <div className="text-xl font-bold text-white mt-2 pt-2 border-t border-cyan-500/30">
                New Total: <span className="text-cyan-400">{results.day1.total}</span> gems
              </div>
            </div>

            <div className="p-4 rounded-lg border border-cyan-500 bg-black">
              <div className="text-sm font-medium text-cyan-400">7 Days Interest</div>
              <div className="text-xl font-bold text-white">
                Interest: <span className="text-cyan-300">{results.day7.interest}</span> gems
              </div>
              <div className="text-xl font-bold text-white mt-2 pt-2 border-t border-cyan-500/30">
                New Total: <span className="text-cyan-400">{results.day7.total}</span> gems
              </div>
            </div>

            <div className="p-4 rounded-lg border border-cyan-500 bg-black">
              <div className="text-sm font-medium text-cyan-400">30 Days Interest</div>
              <div className="text-xl font-bold text-white">
                Interest: <span className="text-cyan-300">{results.day30.interest}</span> gems
              </div>
              <div className="text-xl font-bold text-white mt-2 pt-2 border-t border-cyan-500/30">
                New Total: <span className="text-cyan-400">{results.day30.total}</span> gems
              </div>
            </div>
          </div>

          <p className="text-sm text-cyan-500/70 mt-4 border-t border-cyan-500/20 pt-4">
            *Interest is calculated at a compound rate of 0.15% per day
          </p>
        </div>
      </CardContent>
    </Card>
  );
}